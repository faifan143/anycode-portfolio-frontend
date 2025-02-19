"use client";
import LoadingProvider from "@/hooks/LoadingProvider";
import { store } from "@/redux/store";
import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import FloatingContactButton from "../common/ui/FloatingContactButton";
import Navbar from "../common/ui/Navbar";
import ScrollProgressBar from "../common/ui/ScrollProgressBar";
import Footer from "../common/ui/Footer";

const LayoutProviders = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LoadingProvider>
            <div className="min-h-screen bg-background relative transition-colors duration-300">
              <ScrollProgressBar />
              <FloatingContactButton />
              <div className="relative z-10">
                <Navbar />
                <main className="py-8 p-4">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>
                <Footer />
              </div>
            </div>
          </LoadingProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default LayoutProviders;
