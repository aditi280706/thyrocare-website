import { createServer } from 'vite';

async function testRender() {
  console.log("Starting Vite SSR server to test render App...");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    // Load main App component through Vite's SSR pipeline
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
    console.log("App loaded successfully!");
    
    // Import server.browser to avoid CJS require errors
    const { renderToString } = await vite.ssrLoadModule('react-dom/server.browser');
    console.log("React DOM Server Browser loaded. Rendering App to string...");
    
    // Wrap in a mock rendering block
    const html = renderToString(App());
    console.log("Render completed successfully! HTML length:", html.length);
  } catch (error) {
    console.error("CRITICAL RUNTIME ERROR DETECTED DURING RENDER:");
    console.error(error);
  } finally {
    await vite.close();
  }
}

testRender();
