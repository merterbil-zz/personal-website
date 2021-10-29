import React, { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen bg-gray-900">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;