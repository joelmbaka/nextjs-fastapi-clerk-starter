from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.auth import verify_token
from fastapi import Depends

app = FastAPI(
    title="MobiFix API",
    description="Backend API for MobiFix device repair management system",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "message": "MobiFix API is running"
    }

@app.get("/api/protected")
async def protected_route(user=Depends(verify_token)):
    return {
        "status": "success",
        "user": user,
        "message": "You have access to this protected route"
    }

@app.get("/api/test-auth")
async def test_auth(user=Depends(verify_token)):
    return {
        "message": "Authentication successful",
        "token_data": user
    } 