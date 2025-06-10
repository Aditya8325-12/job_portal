import { HiOutlinePencil, HiOutlinePencilSquare } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { IoMaleFemale } from "react-icons/io5";
import Education from "@/components/profile/Education";
import Language from "@/components/profile/Language";
import Internship from "@/components/profile/Internship";
import Project from "@/components/profile/Project";
import ProfileSummary from "@/components/profile/Summary";
import Resume from "@/components/profile/Resume";
import CompetitiveExam from "@/components/profile/CExam";
import AcademicAchievements from "@/components/profile/Achivements";
import InfoEdit from "@/components/profile/Info";
import { profile_data, links } from "@/components/sample_data.tsx/data";

function Profile() {
  const data = profile_data;

  return (
    <div className=" w-full pt-15 flex flex-col items-center justify-center">
      <div className="w-10/12 pt-9">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full px-4 py-4 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="w-3/12 text-center flex flex-col justify-center items-center ">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Picture"
                className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-sky-800 dark:border-sky-900 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="text-2xl font-bold text-sky-800 dark:text-white mb-2">
                {data.info.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {data.info.title}
              </p>
            </div>

            <div className="w-9/12 flex flex-col justify-center">
              <ul className=" text-gray-700 dark:text-gray-300 w-10/12  space-y-4 grid grid-cols-2">
                <li className="flex items-center gap-2">
                  <IoLocationOutline className="w-4 h-4" />
                  <p> {data.info.location}</p>
                </li>

                <li className="flex items-center gap-2">
                  <LuPhone className="w-4 h-4" />
                  <p> {data.info.phone}</p>
                </li>

                <li className="flex items-center gap-2">
                  <LiaBirthdayCakeSolid className="w-4 h-4" />
                  <p> {data.info.dob}</p>
                </li>

                <li className="flex items-center gap-2">
                  <MdOutlineMail className="w-4 h-4" />
                  <p> {data.info.email}</p>
                </li>

                <li className="flex items-center gap-2">
                  <IoMaleFemale className="w-4 h-4" />
                  <p> {data.info.gender}</p>
                </li>
              </ul>
            </div>

            <div className="absolute top-0 right-0 ">
              <h3
                className="text-lg font-semibold text-sky-300 cursor-pointer"
                onClick={() => document.getElementById("Info").showModal()}
              >
                Edit
              </h3>

              <dialog id="Info" className="modal">
                <div className="modal-box w-11/12 max-w-2xl h-10/12 scroll-smooth mt-5 overflow-auto ">
                  <InfoEdit
                    info={{
                      name: data.info.name,
                      location: data.info.location,
                      dob: data.info.dob,
                      email: data.info.email,
                      title: data.info.title,
                      gender: data.info.gender,
                      phone: data.info.phone,
                    }}
                  />
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 flex flex-col gap-2 justify-end py-5">
        <h1 className="w-full px-2">View & Edit</h1>
        <hr className="w-full bg-gray-200 " />
      </div>

      <div className="w-10/12 gap-2 flex">
        <div className="w-3/12 pr-6 flex flex-col items-center gap-2">
          <div className="w-full bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-lg font-bold mb-4">Quick links</h2>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-sm rounded-2xl w-full py-2 px-6 text-gray-800 hover:bg-gray-100 hover:font-bold cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-9/12 flex flex-col gap-4">
          {/* Resume  */}
          <Resume />
          {/* Education */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">Education</h3>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">{edu.title} </p>
                  <HiOutlinePencilSquare
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="w-4 h-4 cursor-pointer text-gray-600"
                  />

                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-11/12 max-w-2xl h-10/12 scroll-smooth mt-5 overflow-auto ">
                      <Education
                        edu={{
                          board: "CBSE",
                          medium: "English",
                          percentage: "92",
                          passingYear: "2022",
                        }}
                      />
                    </div>
                  </dialog>
                </div>
                <p className="text-sm">{edu.subtitle}</p>
                <p className="text-sm text-gray-600">{edu.score}</p>
              </div>
            ))}
          </div>

          {/* Key Skills */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-start items-center gap-2  py-2">
              <h3 className="text-lg font-bold text-sky-600 ">Key Skills</h3>
              <HiOutlinePencilSquare className="w-4 h-4 cursor-pointer text-gray-600" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {data.keySkills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">Languages</h3>

              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>
            <ul>
              {data.languages.map((lang, i) => (
                <li key={i} className="py-1">
                  <div className="flex gap-2 items-center">
                    <span className="font-medium">{lang.name}</span>
                    <HiOutlinePencilSquare
                      onClick={() =>
                        document.getElementById("language").showModal()
                      }
                      className="w-4 h-4 cursor-pointer text-gray-600"
                    />
                    <dialog id="language" className="modal">
                      <div className="modal-box w-11/12 max-w-2xl h-7/12 scroll-smooth mt-5 overflow-auto ">
                        <Language
                          lang={{
                            language: "English",
                            proficiency: "Read and Write",
                          }}
                        />
                      </div>
                    </dialog>
                  </div>

                  <p className="text-sm">{lang.proficiency}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">
                Internships
              </h3>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>

            {data.internships.map((item, i) => (
              <div key={i}>
                <div className="flex gap-2 items-center">
                  <strong>{item.company}</strong>
                  <HiOutlinePencilSquare
                    onClick={() =>
                      document.getElementById("Internship").showModal()
                    }
                    className="w-4 h-4 cursor-pointer text-gray-600"
                  />
                  <dialog id="Internship" className="modal">
                    <div className="modal-box w-11/12 max-w-2xl h-10/12 scroll-smooth mt-5 overflow-auto ">
                      <Internship
                        internship={{
                          company: "Tech Corp",
                          from: "2024-01",
                          to: "2024-06",
                          projectName: "AI Chatbot",
                          description:
                            "Built an intelligent chatbot using NLP and React.",
                          skills: "React, NLP, Firebase",
                          projectUrl: "https://example.com/project",
                        }}
                      />
                    </div>
                  </dialog>
                </div>
                <p className="text-sm"> {item.period}</p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">Projects</h3>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>

            {data.projects.map((proj, i) => (
              <div key={i} className="py-1">
                <div className="flex gap-2 items-center">
                  <strong>{proj.name}</strong>
                  <HiOutlinePencilSquare
                    onClick={() =>
                      document.getElementById("Project").showModal()
                    }
                    className="w-4 h-4 cursor-pointer text-gray-600"
                  />
                  <dialog id="Project" className="modal">
                    <div className="modal-box w-11/12 max-w-2xl h-10/12 scroll-smooth mt-5 overflow-auto ">
                      <Project
                        project={{
                          name: "Time Track",
                          duration: {
                            from: "Jan 2024",
                            to: "Apr 2024",
                          },
                          description:
                            "A time management app built using the MERN stack, allowing users to track tasks, deadlines, and productivity analytics.",
                          skills: ["MongoDB", "Express", "React", "Node.js"],
                          url: "https://github.com/Aditya/TimeTrack",
                        }}
                      />
                    </div>
                  </dialog>
                </div>
                <p className="text-sm"> {proj.period}</p>
              </div>
            ))}
          </div>

          {/* Summery */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <div className="flex gap-2 items-center ">
                <h3 className="text-lg font-bold text-sky-600 ">
                  profile Summery
                </h3>
                <HiOutlinePencilSquare
                  onClick={() => document.getElementById("Summary").showModal()}
                  className="w-4 h-4 cursor-pointer text-gray-600"
                />
                <dialog id="Summary" className="modal">
                  <div className="modal-box w-11/12 max-w-2xl h-8/12 scroll-smooth mt-5 overflow-auto ">
                    <ProfileSummary
                      profile={{ summary: data.profileSummary }}
                    />
                    ;
                  </div>
                </dialog>
              </div>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>

            <p>{data.profileSummary}</p>
          </div>

          {/* Competitive Exams */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">
                Competitive Exams
              </h3>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>
            {data.competitiveExams.map((exam, i) => (
              <div key={i} className="py-1">
                <div className="flex gap-2 items-center">
                  <strong>{exam.name}</strong>
                  <HiOutlinePencilSquare
                    onClick={() => document.getElementById("Cexam").showModal()}
                    className="w-4 h-4 cursor-pointer text-gray-600"
                  />
                  <dialog id="Cexam" className="modal">
                    <div className="modal-box w-11/12 max-w-2xl h-7/12 scroll-smooth mt-5 overflow-auto ">
                      <CompetitiveExam
                        exam={{
                          examName: "GATE",
                          rank: "245",
                        }}
                      />
                    </div>
                  </dialog>
                </div>
                <p className="text-sm"> {exam.details}</p>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            <div className="w-full flex justify-between  py-2">
              <h3 className="text-lg font-bold text-sky-600 mb-2">
                Academic Achievements
              </h3>
              <h3 className="text-lg font-semibold text-sky-300 cursor-pointer">
                Add
              </h3>
            </div>
            {data.academicAchievements.map((item, i) => (
              <div key={i} className="py-1">
                <div className="flex gap-2 items-center">
                  <strong>{item.during}</strong>
                  <HiOutlinePencilSquare
                    onClick={() =>
                      document.getElementById("Achievements").showModal()
                    }
                    className="w-4 h-4 cursor-pointer text-gray-600"
                  />
                  <dialog id="Achievements" className="modal">
                    <div className="modal-box w-11/12 max-w-2xl h-6/12 scroll-smooth mt-5 overflow-auto ">
                      <AcademicAchievements
                        achievement={{
                          achievementType: item.achievement,
                        }}
                      />
                    </div>
                  </dialog>
                </div>
                <p className="text-sm"> {item.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
