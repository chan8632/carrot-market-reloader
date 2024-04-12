import Image from "next/image";

export default function Home() {
  return (
    // <main className="bg-gray-100 sm:bg-red-100 h-screen flex items-center justify-center px-10">
    //   {/* px는 x축으로 padding값이 나온다는 이야기다. dark라는 modifer는 컴퓨터 자체로 다크모드를 설정하면 같이 따라간다.
    //   sm:은 최소크기~그 이후 큰화면에서 적용된다는 이야기다.*/}
    //   <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4 ">
    //     <div className="group flex flex-col">
    //       <input
    //         className="bg-gray-100 w-full"
    //         placeholder="Write your email"
    //       />
    //       <span className="group-focus-within:block hidden">Make sure it is a valid email...</span>
    //       {/* 내부에 focus된 input을 갖고 있을 때만 true가 된다. */}
    //       <button className="w-full h-10 text-white bg-black rounded-sexy-name me-tomaoto">Submit</button>
    //     </div>
        
    //   </div>
    // </main>
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
  );
}
