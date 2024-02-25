import React from 'react';
import TeamItem from './TeamItem';

interface TeamProps { team_members: { src: string; name: string; designation: string; }[]; }

const team_members = [
  {
    src: "/img/team/ammar-pic.jpg",
    name: "Ammar Amir",
    designation: "Founder & CO",
  },
  {
    src: "/img/team/frin-pic.jpg",
    name: "Syyeda Farheen Batool",
    designation: "Head of Design",
  },
  {
    src: "/img/team/wasiq-pic.png",
    name: "Rai Wasiq Abdullah",
    designation: "Vp People",
  },
  
];

const Team: React.FC<TeamProps> = (props) => {
   return (
   <section className="bg-gray-100 py-16">
     <div className="container mx-auto px-4">
       <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/3 p-4">
           <div className="h-full bg-gray-200 rounded-lg overflow-hidden">
             <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
                src={team_members[0].src} alt={team_members[0].name} />
              <div className="p-6">
                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                   {team_members[0].designation}
                    </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
                     {team_members[0].name}
                   </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="h-full bg-gray-200 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={team_members[1].src} alt={team_members[1].name} />
                 <div className="p-6"> 
                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                   {team_members[1].designation}
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
                      {team_members[1].name}
                       </h1>
                    </div> 
                  </div> 
                </div> 
                <div className="w-full md:w-1/3 p-4">
                  <div className="h-full bg-gray-200 rounded-lg overflow-hidden">
                     <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={team_members[2].src} alt={team_members[2].name} /> 
                      <div className="p-6"> <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                         {team_members[2].designation}
                          </h2>
                       <h1 className="title-font sm:text-2xl text-xl font-medium mb-3"> 
                       {team_members[2].name} </h1> </div> </div> </div> </div> </div> </section>); };

export default Team;