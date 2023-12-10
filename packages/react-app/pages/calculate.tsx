// import React, { useState, useEffect } from "react";
// import { useAccount } from "wagmi";
// import Chart from "chart.js/auto";
// import { FaTimesCircle, FaBars, FaBook, FaCheckSquare } from "react-icons/fa";
// import Link from "next/link";

// interface Post {
//   id: number;
//   title: string;
//   href: string;
//   videoEmbedCode: string;
//   date: string;
//   datetime: string;
//   author: {
//     name: string;
//     imageUrl: string;
//   };
// }

// const Home: React.FC = () => {
//   const [userAddress, setUserAddress] = useState<string>("");
//   const [investmentAmount, setInvestmentAmount] = useState<string>("");
//   const [investmentPeriod, setInvestmentPeriod] = useState<string>("");
//   const [result, setResult] = useState<number | null>(null);
//   const [chart, setChart] = useState<Chart | null>(null);
//   const { address, isConnected } = useAccount();

//   const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInvestmentAmount(e.target.value);
//     calculateResult(); // Calculate result when the investment amount changes
//   };

//   const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInvestmentPeriod(e.target.value);
//     calculateResult(); // Calculate result when the investment period changes
//   };

//   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInvestmentPeriod(e.target.value);
//     calculateResult(); // Calculate result when the slider value changes
//   };

//   const calculateResult = () => {
//     // Perform your calculation logic here
//     // For demonstration, I'm just doubling the investment amount
//     const calculatedResult = parseInt(investmentAmount, 10) * 2;
//     setResult(calculatedResult);

//     // Update the chart data
//     if (chart) {
//       chart.data.labels?.push(new Date().toLocaleTimeString());
//       chart.data.datasets?.[0].data?.push(calculatedResult);
//       chart.update();
//     }
//   };

//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       id: "01",
//       name: "What kind of Investor are you?",
//       href: "#",
//       status: "current",
//     },
//     {
//       id: "02",
//       name: "Simulate investment goal",
//       href: "#",
//       status: "upcoming",
//     },
//     {
//       id: "03",
//       name: "Start Investing",
//       href: "#",
//       status: "upcoming",
//     },
//   ];

//   const classNames = (...classes: string[]) =>
//     classes.filter(Boolean).join(" ");

//   useEffect(() => {
//     if (isConnected && address) {
//       setUserAddress(address);
//     }
//   }, [address, isConnected]);

//   useEffect(() => {
//     // Create a chart on component mount
//     const ctx = document.getElementById("earningsChart") as HTMLCanvasElement;
//     const newChart = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: [],
//         datasets: [
//           {
//             label: "Earnings Over Time",
//             borderColor: "#92548B",
//             backgroundColor: "rgba(146, 84, 139, 0.1)",
//             data: [],
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             type: "linear",
//             position: "bottom",
//           },
//         },
//       },
//     });

//     setChart(newChart);

//     // Cleanup function to destroy the chart on component unmount
//     return () => {
//       newChart.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div className="lg:border-b lg:border-t lg:border-gray-200 mt-20">
//         <nav
//           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
//           aria-label="Progress"
//         >
//           <ol
//             role="list"
//             className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
//           >
//             {steps.map((step, stepIdx) => (
//               <li key={step.id} className="relative overflow-hidden lg:flex-1">
//                 <div
//                   className={classNames(
//                     stepIdx === 0 ? "rounded-t-md border-b-0" : "",
//                     stepIdx === steps.length - 1
//                       ? "rounded-b-md border-t-0"
//                       : "",
//                     "overflow-hidden border border-gray-200 lg:border-0",
//                     activeStep === stepIdx ? "open" : "closed"
//                   )}
//                 >
//                   {step.status === "complete" ? (
//                     <a
//                       href={step.href}
//                       className="group"
//                       onClick={() => setActiveStep(stepIdx)}
//                     >
//                       <span
//                         className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                         aria-hidden="true"
//                       />
//                       <span
//                         className={classNames(
//                           stepIdx !== 0 ? "lg:pl-9" : "",
//                           "flex items-start px-6 py-5 text-sm font-medium"
//                         )}
//                       >
//                         <span className="flex-shrink-0">
//                           <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
//                             <FaCheckSquare
//                               className="h-6 w-6 text-white"
//                               aria-hidden="true"
//                             />
//                           </span>
//                         </span>
//                         <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
//                           <span className="text-sm font-medium">
//                             {step.name}
//                           </span>
//                         </span>
//                       </span>
//                     </a>
//                   ) : step.status === "current" ? (
//                     <a
//                       href={step.href}
//                       aria-current="step"
//                       onClick={() => setActiveStep(stepIdx)}
//                     >
//                       <span
//                         className="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                         aria-hidden="true"
//                       />
//                       <span
//                         className={classNames(
//                           stepIdx !== 0 ? "lg:pl-9" : "",
//                           "flex items-start px-6 py-5 text-sm font-medium"
//                         )}
//                       >
//                         <span className="flex-shrink-0">
//                           <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
//                             <span className="text-indigo-600">{step.id}</span>
//                           </span>
//                         </span>
//                         <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
//                           <span className="text-sm font-medium text-indigo-600">
//                             {step.name}
//                           </span>
//                         </span>
//                       </span>
//                     </a>
//                   ) : (
//                     <a href={step.href} className="group">
//                       <span
//                         className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                         aria-hidden="true"
//                       />
//                       <span
//                         className={classNames(
//                           stepIdx !== 0 ? "lg:pl-9" : "",
//                           "flex items-start px-6 py-5 text-sm font-medium"
//                         )}
//                       >
//                         <span className="flex-shrink-0">
//                           <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
//                             <span className="text-gray-500">{step.id}</span>
//                           </span>
//                         </span>
//                         <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
//                           <span className="text-sm font-medium text-gray-500">
//                             {step.name}
//                           </span>
//                         </span>
//                       </span>
//                     </a>
//                   )}

//                   {stepIdx !== 0 ? (
//                     <>
//                       {/* Separator */}
//                       <div
//                         className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
//                         aria-hidden="true"
//                       >
//                         <svg
//                           className="h-full w-full text-gray-300"
//                           viewBox="0 0 12 82"
//                           fill="none"
//                           preserveAspectRatio="none"
//                         >
//                           <path
//                             d="M0.5 0V31L10.5 41L0.5 51V82"
//                             stroke="currentcolor"
//                             vectorEffect="non-scaling-stroke"
//                           />
//                         </svg>
//                       </div>
//                     </>
//                   ) : null}
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </nav>
//       </div>

//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="flex flex-col justify-center items-center space-y-4">
//             <select
//               id="country"
//               name="country"
//               autoComplete="country-name"
//               className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//             >
//               <option>Do you have experience investing in crypto?</option>
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="bg-white py-8">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <canvas id="earningsChart" width="400" height="200"></canvas>
//         </div>
//       </div>

//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="flex flex-col justify-center items-center mt-10 space-y-4">
//             {/* Investment Amount Input */}
//             <input
//               type="number"
//               placeholder="Enter Investment Amount"
//               value={investmentAmount}
//               onChange={handleInvestmentChange}
//               className="rounded-md px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring focus:border-blue-300"
//             />

//             {/* Investment Period Input */}
//             <input
//               type="number"
//               placeholder="Enter Investment Period (in years)"
//               value={investmentPeriod}
//               onChange={handlePeriodChange}
//               className="rounded-md px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring focus:border-blue-300"
//             />

//             {/* Calculate Button
//             <button
//               onClick={calculateResult}
//               className="rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//             >
//               Calculate
//             </button> */}

//             <div className="flex items-center space-x-2">
//               <span className="text-gray-700">
//                 Investment Period: {investmentPeriod} years
//               </span>
//               <input
//                 type="range"
//                 min="1"
//                 max="10"
//                 value={investmentPeriod}
//                 onChange={handleSliderChange}
//                 className="w-full"
//               />
//             </div>

//             {/* Result Display */}
//             <div className="font-semibold text-white bg-gray-900 rounded-md px-3 py-2 text-md">
//               Result: {result !== null ? result : "0"}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React from "react";

import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import simulateInvesment from "./api/simulateInvestment";
import SimulationChart from "../components/SimulateChart";

import { useTranslation } from "react-i18next";
import "./i18n";

type Props = {
  monthlyAmount: string;
  setMonthlyAmount: any;
  time: number;
  setTime: any;
  setSimulateState: any;
};

function Simulate({ setSimulateState }: Props) {
  const { t } = useTranslation("Simulation");
  const initialSimulation = {
    labels: ["Today", "1 year"],
    invested: [0, 10],
    pessimisticRevenue: [0, 10],
    optimisticRevenue: [0, 10],
    borderRadius: [0, 1],
  };
  const recommendedMinTime = 1;
  const [simulationData, setSimulationData] = React.useState(initialSimulation);
  const [value, setValue] = React.useState("");
  const [monthlyAmount, setMonthlyAmount] = React.useState("");
  const [time, setTime] = React.useState(recommendedMinTime);

  const handleChangeValue = (event: any) => setValue(event.target.value);

  const handleChangeMonthlyAmount = (event: any) =>
    setMonthlyAmount(event.target.value);

  const simulate = () => {
    setSimulationData(
      simulateInvesment(time, Number(value), Number(monthlyAmount), 0.1)
    );
    // setSimulateState("simulate");
  };

  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="mt-20">
      {/* <Box width={"100%"} padding={5}>
        <Text fontWeight={"light"} fontSize={"15px"}>
          {t("amountMessage")}
        </Text>
        <Input
          type={"number"}
          value={value}
          onChange={handleChangeValue}
          placeholder="$ 0 USDT"
          borderRadius={"12px"}
          focusBorderColor="primary"
        />
      </Box>
      <Box width={"100%"} padding={5}>
        <Text fontWeight={"light"} fontSize={"15px"}>
          {t("recurringMessage")}
        </Text>
        <Input
          type={"number"}
          value={monthlyAmount}
          onChange={handleChangeMonthlyAmount}
          placeholder="$ 0 USDT"
          borderRadius={"12px"}
          focusBorderColor="primary"
        />
      </Box>
      <Box width={"100%"} padding={8}>
        <HStack justifyContent={"space-between"}>
          <Text fontWeight={"light"} fontSize={"15px"}>
            {t("during")}
          </Text>

          <Text fontWeight={"light"} fontSize={"15px"}>
            {time} {t("years")}
          </Text>
        </HStack>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={3}
          min={0}
          max={40}
          step={1}
          onChange={(val) => setTime(val)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onTouchStart={() => setShowTooltip(true)}
          onTouchEndCapture={() => setShowTooltip(false)}
        >
          <SliderTrack bg="#E5E4E5">
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            placement="top"
            isOpen={showTooltip}
            label={`${time}`}
          >
            <SliderThumb></SliderThumb>
          </Tooltip>
        </Slider>
      </Box>
      <Center marginTop={"50px"}>
        <Button
          onClick={simulate}
          isDisabled={value === "" || monthlyAmount === ""}
          boxShadow="0px 2px 3px rgba(0, 0, 0, 0.15)"
          borderRadius={"15px"}
        >
          <Text color={"white"}>{t("continue")}</Text>
        </Button>
      </Center> */}

      <Center marginTop={[0, 100, 100]}>
        <Box width={["50%", "25%", "25%"]}>
          <Box>
            <Text
              paddingTop={10}
              paddingLeft={10}
              fontWeight={"bold"}
              fontSize={"22px"}
            >
              {t("title")}
            </Text>
          </Box>

          <Box width={"100%"} padding={5}>
            <Text fontWeight={"light"} fontSize={"15px"}>
              {t("amountMessage")}
            </Text>
            <Input
              type={"number"}
              value={value}
              onChange={handleChangeValue}
              placeholder="$ 0 USDT"
              borderRadius={"12px"}
              focusBorderColor="primary"
            />
          </Box>

          <Box width={"100%"} padding={5}>
            <Text fontWeight={"light"} fontSize={"15px"}>
              {t("recurringMessage")}
            </Text>
            <Input
              type={"number"}
              value={monthlyAmount}
              onChange={handleChangeMonthlyAmount}
              placeholder="$ 0 USDT"
              borderRadius={"12px"}
              focusBorderColor="primary"
            />
          </Box>

          <Box width={"100%"} padding={8}>
            <HStack justifyContent={"space-between"}>
              <Text fontWeight={"light"} fontSize={"15px"}>
                {/* {t("during")} */}
              </Text>

              <Text fontWeight={"light"} fontSize={"15px"}>
                {/* {time} {t("years")} */}
              </Text>
            </HStack>
            <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={3}
              min={0}
              max={40}
              step={1}
              onChange={(val) => setTime(val)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onTouchStart={() => setShowTooltip(true)}
              onTouchEndCapture={() => setShowTooltip(false)}
            >
              <SliderTrack bg="#E5E4E5">
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="pink"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${time}`}
              >
                <SliderThumb bg="pink"></SliderThumb>
              </Tooltip>
            </Slider>
          </Box>

          <Button
            onClick={simulate}
            isDisabled={value === "" || monthlyAmount === ""}
            bg="chocolate"
            borderRadius={"10px"}
          >
            <Text color={"white"} fontSize={"35px"}>
              {t("simulate")}
            </Text>
          </Button>
        </Box>

        <Box width={["50%", "25%", "25%"]}>
          <SimulationChart
            value={value}
            setValue={setValue}
            monthlyAmount={monthlyAmount}
            setMonthlyAmount={setMonthlyAmount}
            time={time}
            setTime={setTime}
            setSimulateState={setSimulateState}
            setSimulationData={setSimulationData}
            simulationData={simulationData}
          />
        </Box>
      </Center>
    </div>
  );
}

export default Simulate;
