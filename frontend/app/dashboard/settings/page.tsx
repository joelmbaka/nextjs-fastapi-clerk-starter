export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="grid gap-6 max-w-2xl">
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h2 className="text-lg font-medium mb-4">Theme Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Dark Mode</label>
              <button className="rounded-full bg-foreground/10 px-4 py-2 text-sm font-medium hover:bg-foreground/20">
                Toggle
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h2 className="text-lg font-medium mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">API Base URL</label>
              <input 
                type="text" 
                value="http://localhost:8000" 
                readOnly
                className="rounded-md bg-foreground/5 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 