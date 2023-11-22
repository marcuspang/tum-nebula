import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import Link from "next/link";
import { SVGProps } from "react";
import { ColourModeToggle } from "./colour-mode-toggle";

export function FleetManagement() {
  return (
    <div key="1" className="flex flex-col h-screen">
      <header className="flex items-center justify-between h-16 px-6 bg-transparent dark:bg-zinc-800/40 py-4 border-b">
        <Link
          className="flex items-center gap-2 font-semibold text-black dark:text-white"
          href="#"
        >
          <IconDrone className="h-6 w-6" />
          <span>Nebula</span>
        </Link>
        <nav className="flex items-center gap-6">
          <ColourModeToggle />
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 h-full bg-white dark:bg-zinc-800/40 p-6">
          <h1 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Drone Fleet Management
          </h1>
          <nav className="flex flex-col gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link href="#drone-status">Drone Status</Link>
            <Link href="#flight-approval">Flight Approval</Link>
            <Link href="#flight-logs">Flight Logs</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-white dark:bg-black">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Flight ID: DRN070623
          </h1>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle
                id="drone-status"
                className="text-zinc-800 dark:text-zinc-100"
              >
                Drone Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-800 dark:text-zinc-100 pb-1">
                Fleet 1 (ID: 12345):{" "}
                <CheckCircleIcon className="text-green-600 inline" />
              </p>
              <p className="text-zinc-800 dark:text-zinc-100 pb-1">
                Fleet 2 (ID: 67890):{" "}
                <XCircleIcon className="text-red-600 inline" />
              </p>
              <p className="text-zinc-800 dark:text-zinc-100 pb-1">
                Fleet 3 (ID: 11223):{" "}
                <CheckCircleIcon className="text-green-600 inline" />
              </p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle
                id="flight-approval"
                className="text-zinc-800 dark:text-zinc-100"
              >
                Flight Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="text-zinc-800 dark:text-zinc-100">
                <TableHeader>
                  <TableRow>
                    <TableHead>Drone</TableHead>
                    <TableHead>ATC report and acknowledgment</TableHead>
                    <TableHead>
                      Ground traffic authority report and acknowledgment
                    </TableHead>
                    <TableHead>Emergency Response ready</TableHead>
                    <TableHead>
                      On-site environments inspected and suitable for flight
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Fleet 1</TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone1-cat1"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone1-cat2"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone1-cat3"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone1-cat4"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fleet 2</TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone2-cat1"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone2-cat2"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone2-cat3"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone2-cat4"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fleet 3</TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone3-cat1"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone3-cat2"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone3-cat3"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="drone3-cat4"
                        className="border-black dark:border-white"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle
                id="flight-logs"
                className="text-zinc-800 dark:text-zinc-100"
              >
                Flight Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-black text-green-400 font-mono p-4">
              <p>[2023-11-22 10:00:00] Drone 1: Take off</p>
              <p>[2023-11-22 10:15:00] Drone 1: Reached waypoint 1</p>
              <p>[2023-11-22 10:30:00] Drone 1: Reached waypoint 2</p>
              <p>[2023-11-22 10:45:00] Drone 1: Landing</p>
              <p>[2023-11-22 11:00:00] Drone 2: Take off</p>
              <p>[2023-11-22 11:15:00] Drone 2: Reached waypoint 1</p>
              <p>[2023-11-22 11:30:00] Drone 2: Reached waypoint 2</p>
              <p>[2023-11-22 11:45:00] Drone 2: Landing</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

function IconDrone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}
