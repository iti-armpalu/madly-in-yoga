// components/Background.tsx
export default function Background() {
    return (
      <div aria-hidden className="-z-10 fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e8956b_0%,_#f4a460_25%,_#f5dcc8_60%,_#efe0d1_100%)]" />
      </div>
    );
  }
  