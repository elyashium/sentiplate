// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Brain, Apple, Dna, ChevronRight, ChevronLeft } from 'lucide-react';

// const LearnMore = () => {
//   const [currentPage, setCurrentPage] = useState(0);
  
//   // Sample data for serotonin levels chart
//   const serotoninData = [
//     { time: '0h', level: 30, afterMeal: 30 },
//     { time: '1h', level: 35, afterMeal: 65 },
//     { time: '2h', level: 32, afterMeal: 75 },
//     { time: '3h', level: 28, afterMeal: 60 },
//     { time: '4h', level: 25, afterMeal: 45 },
//   ];

//   const pages = [
//     // Page 1: Introduction
//     <div key="intro" className="space-y-6">
//       <h1 className="text-3xl font-bold text-gray-900">The Science of Food and Mood</h1>
      
//       <div className="bg-blue-50 p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4 text-blue-900">Key Molecules in Mood Regulation</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Card className="bg-white">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-2 mb-2">
//                 <Brain className="text-blue-500" />
//                 <h3 className="font-semibold">Serotonin</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Known as the "feel-good" neurotransmitter, serotonin is synthesized from tryptophan, 
//                 an amino acid found in foods like turkey, eggs, and cheese.
//               </p>
//             </CardContent>
//           </Card>
          
//           <Card className="bg-white">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-2 mb-2">
//                 <Dna className="text-green-500" />
//                 <h3 className="font-semibold">Dopamine</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 The "reward" chemical, dopamine is influenced by protein-rich foods containing 
//                 tyrosine, like fish, meat, and legumes.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Serotonin Levels After Meals</h2>
//         <div className="h-64 w-full">
//           <ResponsiveContainer>
//             <LineChart data={serotoninData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="level" stroke="#8884d8" name="Normal Level" />
//               <Line type="monotone" dataKey="afterMeal" stroke="#82ca9d" name="After Balanced Meal" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>,

//     // Page 2: Food-Mood Connection
//     <div key="connection" className="space-y-6">
//       <h2 className="text-3xl font-bold text-gray-900">How Food Affects Your Brain</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-2">Carbohydrates</h3>
//             <p className="text-sm text-gray-600">
//               Complex carbs stabilize blood sugar and support steady serotonin production.
//               They provide sustained energy and mood stability.
//             </p>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-green-50 to-blue-50">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-2">Proteins</h3>
//             <p className="text-sm text-gray-600">
//               Proteins break down into amino acids, essential for producing neurotransmitters
//               that regulate mood and motivation.
//             </p>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-2">Healthy Fats</h3>
//             <p className="text-sm text-gray-600">
//               Omega-3 fatty acids support brain structure and reduce inflammation,
//               potentially improving mood and reducing depression risk.
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow mt-6">
//         <h3 className="font-semibold mb-4">Mood-Food Cycle</h3>
//         <div className="flex justify-center">
//           <div className="relative w-64 h-64">
//             {/* Add a circular workflow diagram */}
//             <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-spin-slow"></div>
//             <div className="absolute inset-4 rounded-full border-4 border-green-200"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//               <Apple className="w-8 h-8 mx-auto text-green-500" />
//               <span className="text-sm font-medium">Food Choice Impact</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,

//     // Page 3: Practical Applications
//     <div key="practical" className="space-y-6">
//       <h2 className="text-3xl font-bold text-gray-900">Making Better Food Choices</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card className="bg-white">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Mood-Boosting Foods</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 Dark Chocolate (70%+ cocoa) - Boosts endorphins
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 Fatty Fish - Rich in omega-3s
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 Fermented Foods - Support gut-brain axis
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 Nuts and Seeds - Provide zinc and selenium
//               </li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className="bg-white">
//           <CardContent className="p-4">
//             <h3 className="font-semibold mb-4">Timing Your Meals</h3>
//             <div className="space-y-3 text-sm text-gray-600">
//               <p>
//                 Regular meal timing helps maintain stable blood sugar and mood levels.
//                 Aim for meals every 3-4 hours.
//               </p>
//               <p>
//                 Include protein with each meal to support sustained energy and
//                 neurotransmitter production.
//               </p>
//               <p>
//                 Consider your circadian rhythm when planning meals to optimize
//                 mood and energy levels.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="bg-gray-50 p-6 rounded-lg mt-6">
//         <h3 className="font-semibold mb-4">Quick Tips for Mood-Supporting Meals</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//           <div className="bg-white p-4 rounded">
//             <h4 className="font-medium mb-2">Breakfast</h4>
//             <p className="text-gray-600">
//               Start with complex carbs and protein for sustained energy and mood stability.
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded">
//             <h4 className="font-medium mb-2">Lunch</h4>
//             <p className="text-gray-600">
//               Balance proteins and vegetables to maintain focus and afternoon energy.
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded">
//             <h4 className="font-medium mb-2">Dinner</h4>
//             <p className="text-gray-600">
//               Include calming foods to support relaxation and quality sleep.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <div className="min-h-[600px]">
//         {pages[currentPage]}
//       </div>
      
//       {/* Navigation */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={() => setCurrentPage(curr => Math.max(0, curr - 1))}
//           disabled={currentPage === 0}
//           className="flex items-center gap-2 text-blue-600 disabled:text-gray-400"
//         >
//           <ChevronLeft /> Previous
//         </button>
//         <div className="flex gap-2">
//           {pages.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentPage(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 currentPage === idx ? 'bg-blue-600' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//         <button
//           onClick={() => setCurrentPage(curr => Math.min(pages.length - 1, curr + 1))}
//           disabled={currentPage === pages.length - 1}
//           className="flex items-center gap-2 text-blue-600 disabled:text-gray-400"
//         >
//           Next <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LearnMore;