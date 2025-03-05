
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guide from "./pages/Guide";
import Ranks from "./pages/Ranks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the basename from the current URL if on GitHub Pages
const getBasename = () => {
  // If we're on GitHub Pages, this will return the repository name (e.g., /your-repo-name)
  // If we're running locally, this will return an empty string
  const pathname = window.location.pathname;
  const repoName = pathname.split('/')[1]; // Get the first segment after the domain
  
  // Check if we're in a GitHub Pages environment (has a segment that's not just /)
  if (repoName && repoName !== '') {
    return `/${repoName}`;
  }
  return '';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/ranks" element={<Ranks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
