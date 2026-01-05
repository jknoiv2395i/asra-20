import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 pt-20">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-4xl font-instrument font-semibold text-slate-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            This page is currently under construction. Please check back soon or{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              return to the homepage
            </Link>
            .
          </p>
          <div className="inline-block">
            <Link
              to="/"
              className="px-8 py-3 bg-[#131313] text-white rounded-full hover:bg-black transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
