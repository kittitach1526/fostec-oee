

export default function Sidebar() {
    return (

        <div className="bg-gray-200">
            <div className="flex justify-center mt-10">
                Sidebar
            </div>
            <br />
            <div>

                <ul>
                    <li className="flex justify-center">
                        <a href="/">OVERVIEW</a>
                    </li>
                    <li className="flex justify-center">
                        <a href="/process">
                            PROCESS
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="/performance">
                            Performance
                        </a>
                    </li>
                    
                    <li className="flex justify-center">
                        <a href="/quality">
                            Quality
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#">
                            Alert
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#">
                            Setting
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#">
                            Data
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a href="#">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );


}