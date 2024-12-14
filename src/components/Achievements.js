import React from "react";

const Achievements = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Achievement 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">MERN STACK DEVELOPER PROGRAM</h3>
          <p className="text-gray-400">Google Out Tech | 2022</p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>
              Recognized for exceptional leadership in delivering a high-impact
              project.
            </li>
            <li>
              Improved team efficiency by 25% through optimized workflows and
              mentoring.
            </li>
            <li>
              Contributed to achieving a 40% growth in project deliverables.
            </li>
          </ul>
        </div>

        {/* Achievement 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">REACT JS WORKSHOP</h3>
          <p className="text-gray-400">Texas College of Management And IT| 2023</p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>
              Successfully completed an intensive 3-month full-stack development
              program.
            </li>
            <li>
              Built dynamic projects using React, Node.js, Express, and MongoDB.
            </li>
            <li>
              Demonstrated skills in building scalable and responsive web
              applications.
            </li>
          </ul>
        </div>

        {/* Achievement 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">WORDPRESS WORKSHOP</h3>
          <p className="text-gray-400">Texas College of Management & IT | 2023</p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>
              Presented a technical session on "Building Responsive React
              Applications."
            </li>
            <li>
              Engaged 100+ attendees with live coding examples and best
              practices.
            </li>
            <li>
              Received excellent feedback for clarity, depth, and delivery.
            </li>
          </ul>
        </div>

        {/* Achievement 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">ABC ABC</h3>
          <p className="text-gray-400">Lorem lorem lorem | 2021</p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>
              Developed an innovative e-learning platform using React and
              Node.js.
            </li>
            <li>
              Collaborated with a team of 4 to deliver a functional MVP within 48
              hours.
            </li>
            <li>
              Secured a finalist position among 50+ competing teams nationwide.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
