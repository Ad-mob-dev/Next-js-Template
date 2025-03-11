// export const metadata = {
//   title: 'Products',
//   description: 'About of Next',
// }


export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <header>PDHeader</header>
      {children}
      <footer>PDfooter</footer>
    </>
  );
}
