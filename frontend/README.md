# NextFast Template

A modern, production-ready full-stack template featuring Next.js 14 with App Router and FastAPI backend.

## 🚀 Features

- ✅ **Next.js 14** with App Router and Server Components
- ✅ **FastAPI** backend with async support
- ✅ **Clerk Authentication** with JWT validation
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Dark Mode** support
- ✅ **Protected Dashboard** with sample pages
- ✅ **API Integration** examples
- ✅ **Environment Variables** configuration
- ✅ **Production-ready** setup

## 📁 Project Structure

```
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── dashboard/
│   │   │   ├── features/
│   │   │   ├── settings/
│   │   │   ├── docs/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   └── lib/
└── backend/
    ├── app/
    │   ├── api/
    │   ├── core/
    │   └── models/
    └── main.py
```

## 🛠 Getting Started

### Frontend Setup

```bash
# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Backend Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Unix
.\venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env

# Run development server
uvicorn main:app --reload
```

## 🔒 Authentication Flow

1. User signs in/up through Clerk
2. Frontend receives session token
3. Backend validates token on protected routes
4. Protected dashboard accessible only to authenticated users

## 🎨 Customization

### Theme
- Modify `tailwind.config.js` for styling
- Update `ThemeProvider` for dark/light mode
- Customize components in `components/ui`

### API Routes
- Add new routes in `backend/app/api`
- Define types in `frontend/lib/types`
- Implement API calls in `frontend/lib/api`

## 📚 Dashboard Pages

- **Overview**: API status, authentication checks, and metrics
- **Features**: Showcase of template capabilities
- **Settings**: Theme and API configuration
- **Documentation**: Quick start guide and resources

## 🔧 Development Tools

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- API documentation with Swagger/OpenAPI

## 📝 Environment Variables

### Frontend (.env.local)
```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```plaintext
API_VERSION=v1
DEBUG=True
ENVIRONMENT=development
SECRET_KEY=your_secret_key
ALLOWED_ORIGINS=http://localhost:3000
CLERK_JWT_PUBLIC_KEY=your_public_key
```

## 📄 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Clerk Documentation](https://clerk.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🌟 Support

If you find this template helpful, please give it a star on GitHub!
