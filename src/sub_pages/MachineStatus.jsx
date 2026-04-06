import { ProgressBar } from "../components/Progressbar";
import { CircularGauge } from "../components/CircularGauge";
export default function MachineStatus() {
  return (
    <div>
      <div className="rounded-2xl ml-5">
        <div className="mt-5">
          <span className="flex justify-center">Machine Status</span>
        </div>

        <div className="mt-4 bg-gray-400 rounded-4xl p-2">
          <div className="flex ml-10">
            <h1>Inbound</h1>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <div className="col-span-1">
              <div className="flex -mt-7">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="25%"
                  subtitle="OEE"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-end">
                Availability
              </div>
              <div className="flex justify-end">
                <div>Performance</div>
              </div>
              <div className="flex justify-end">
                <div>Quality</div>
              </div>
              <div className="flex justify-end">
                <div>OEE</div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <div className="p-2 flex justify-center">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2 flex justify-center">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2 flex justify-center">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2 flex justify-center">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Inbound end */}

      <div className="ml-5">
        <div className="mt-4 bg-gray-400 rounded-4xl p-2">
          <div className="flex ml-10">
            <h1>Material Handing</h1>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <div className="col-span-1">
              <div className="flex -mt-7">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="25%"
                  subtitle="OEE"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-end">
                Availability
              </div>
              <div className="flex justify-end">
                <div>Performance</div>
              </div>
              <div className="flex justify-end">
                <div>Quality</div>
              </div>
              <div className="flex justify-end">
                <div>OEE</div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
            </div>
          </div>
        </div>

      </div>
      {/* Material Handing end */}
      <div className="ml-5">
        <div className="mt-4 bg-gray-400 rounded-4xl p-2">
          <div className="flex ml-10">
            <h1>Sort & Clean</h1>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <div className="col-span-1">
              <div className="flex -mt-7">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="25%"
                  subtitle="OEE"
                />
              </div>

            </div>
            <div>
              <div className="flex justify-end">
                Availability
              </div>
              <div className="flex justify-end">
                <div>Performance</div>
              </div>
              <div className="flex justify-end">
                <div>Quality</div>
              </div>
              <div className="flex justify-end">
                <div>OEE</div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
            </div>
          </div>
        </div>

      </div>
      {/* Sort & Clean end */}
      <div className="ml-5">
        <div className="mt-4 bg-gray-400 rounded-4xl p-2">
          <div className="flex ml-10">
            <h1>Packaging</h1>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <div className="col-span-1">
              <div className="flex -mt-7">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="25%"
                  subtitle="OEE"
                />
              </div>

            </div>
            <div>
              <div className="flex justify-end">
                Availability
              </div>
              <div className="flex justify-end">
                <div>Performance</div>
              </div>
              <div className="flex justify-end">
                <div>Quality</div>
              </div>
              <div className="flex justify-end">
                <div>OEE</div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
            </div>
          </div>
        </div>

      </div>
      {/* Packaging end */}
      <div className="ml-5">
        <div className="mt-4 bg-gray-400 rounded-4xl p-2">
          <div className="flex ml-10">
            <h1>QC</h1>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <div className="col-span-1">
              <div className="flex -mt-7">
                <CircularGauge
                  value={25}
                  startAngle={90}
                  title="25%"
                  subtitle="OEE"
                />
              </div>

            </div>
            <div>
              <div className="flex justify-end">
                Availability
              </div>
              <div className="flex justify-end">
                <div>Performance</div>
              </div>
              <div className="flex justify-end">
                <div>Quality</div>
              </div>
              <div className="flex justify-end">
                <div>OEE</div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
                <div className="p-2">
                  <ProgressBar progress={50} color="bg-red-500" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
              <div>unit</div>
            </div>
          </div>
        </div>

      </div>

    </div>


  );
}
