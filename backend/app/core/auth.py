from fastapi import HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import jwt
from jose.exceptions import JWTError
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

security = HTTPBearer()

async def get_clerk_jwks():
    async with httpx.AsyncClient() as client:
        response = await client.get(os.getenv('CLERK_JWKS_URL'))
        return response.json()

async def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        token = credentials.credentials
        jwks = await get_clerk_jwks()
        
        # Basic validation first
        if not token:
            raise HTTPException(status_code=401, detail="Invalid token")
        
        # Verify the token with Clerk's public key
        try:
            payload = jwt.decode(
                token,
                jwks,  # We'll need to extract the correct key from JWKS
                algorithms=["RS256"],
                audience=os.getenv('CLERK_AUDIENCE'),
                issuer=os.getenv('CLERK_ISSUER')
            )
            return payload
        except JWTError as e:
            raise HTTPException(status_code=401, detail=f"Invalid token: {str(e)}")
            
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e)) 