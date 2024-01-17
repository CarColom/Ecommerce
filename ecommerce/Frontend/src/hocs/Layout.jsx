import Footer from '@/features/footer/index';
import Navbar from '@/features/navbar/index';

export default function Layout({ children }) {
  return (
    <div className="dark:bg-dark-bg">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>

      <Footer />
    </div>
  );
}