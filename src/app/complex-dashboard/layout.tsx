export default function DashboardLayout({
  children,
  firstcomp,
  secondcomp,
  thirdcomp,
}: {
  children: React.ReactNode;
  firstcomp: React.ReactNode;
  secondcomp: React.ReactNode;
  thirdcomp: React.ReactNode;
}) {
  return (
    <>
      <div> {children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> {firstcomp}</div>
          <div> {secondcomp}</div>
        </div>

        <div style={{ display: "flex", flex:1 }}>
          {thirdcomp}
        </div>
      </div>
    </>
  );
}
