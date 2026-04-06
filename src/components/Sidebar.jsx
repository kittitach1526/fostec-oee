export default function Sidebar() {
  return (
    <div className="bg-gray-200 mt-10">
      {/* <div className="flex justify-center mt-10">Sidebar</div> */}
      {/* <br /> */}
      <div className="ml-10">
        <ul>
          <li className="p-2">
            <a href="/">OVERVIEW</a>
          </li>
          <li className="p-2">
            <a href="/process">PROCESS</a>
          </li>
          <li className="p-2">
            <a href="/performance">PERFORMANCE</a>
          </li>
          <li className="p-2">
            <a href="/quality">QUALITY</a>
          </li>
          <li className="p-2">
            <a href="#">ALERT</a>
          </li>
          <li className="p-2">
            <a href="#">SETTING</a>
          </li>
          <li className="p-2">
            <a href="#">DATA</a>
          </li>
          <li className="p-2">
            <a href="#">LOGOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
