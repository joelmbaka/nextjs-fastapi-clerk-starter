'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

export default function DashboardPage() {
  const [apiStatus, setApiStatus] = useState<string>('');
  const [authStatus, setAuthStatus] = useState<string>('');
  const { getToken } = useAuth();

  useEffect(() => {
    const testAPI = async () => {
      try {
        const token = await getToken();
        
        // Test health endpoint
        const healthResponse = await fetch('http://localhost:8000/api/health', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const healthData = await healthResponse.json();
        setApiStatus(healthData.status);

        // Test auth endpoint
        const authResponse = await fetch('http://localhost:8000/api/test-auth', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const authData = await authResponse.json();
        setAuthStatus('Success');
        console.log('Auth Response:', authData);
      } catch (error) {
        console.error('API Error:', error);
        setApiStatus('error');
        setAuthStatus('error');
      }
    };

    testAPI();
  }, [getToken]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h3 className="text-lg font-medium">API Status</h3>
          <p className="mt-2 text-3xl font-bold">{apiStatus || 'Loading...'}</p>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h3 className="text-lg font-medium">Auth Status</h3>
          <p className="mt-2 text-3xl font-bold">{authStatus || 'Loading...'}</p>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h3 className="text-lg font-medium">Sample Metric 1</h3>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h3 className="text-lg font-medium">Sample Metric 2</h3>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h3 className="text-lg font-medium">Sample Metric 3</h3>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="rounded-lg border border-foreground/10 bg-background p-6">
        <h3 className="text-lg font-medium">Activity Feed</h3>
        <p className="mt-4 text-sm text-foreground/60">
          Add your activity feed or any other dashboard content here
        </p>
      </div>
    </div>
  );
} 