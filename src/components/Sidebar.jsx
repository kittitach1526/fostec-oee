export default function Sidebar() {
  return (
    <div className="bg-gray-200 mt-10">
      {/* <div className="flex justify-center mt-10">Sidebar</div> */}
      {/* <br /> */}
      <div className="ml-7">
        <ul>
          <li className="p-2">
            <a href="/">OVERVIEW</a>
          </li>
          <li className="p-2">
            <a href="/process">PROCESS</a>
          </li>
          <li className="p-2">
            <a href="/performance">Performance</a>
          </li>

          <li className="p-2">
            <a href="/quality">Quality</a>
          </li>
          <li className="p-2">
            <a href="#">Alert</a>
          </li>
          <li className="p-2">
            <a href="#">Setting</a>
          </li>
          <li className="p-2">
            <a href="#">Data</a>
          </li>
          <li className="p-2">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
