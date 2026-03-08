import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Gallery = lazy(() => import("./pages/Gallery"));
const RatesInquiries = lazy(() => import("./pages/RatesInquiries"));
const Excursions = lazy(() => import("./pages/Excursions"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><Gallery /></Suspense>} />
          <Route path="/rates" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><RatesInquiries /></Suspense>} />
          <Route path="/excursions" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><Excursions /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
