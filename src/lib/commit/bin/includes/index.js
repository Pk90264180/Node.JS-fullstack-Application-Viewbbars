// const simpleGit = require("simple-git");
// const fs = require("fs");
// const schedule = require("node-schedule");
// require("dotenv").config();

// // Git configuration
// const REPO_PATH = "."; // Use current directory
// const BRANCH_NAME = process.env.SECRET_BRANCH_NAME;
// const git = simpleGit(REPO_PATH);

// const programmingTips = [
//   "Always use meaningful variable names.",
//   "Write modular and reusable functions.",
//   "Keep your functions short and focused.",
//   "Avoid global variables whenever possible.",
//   "Use comments to explain why, not what.",
//   "Follow coding style guides for consistency.",
//   "Refactor code regularly to improve readability.",
//   "Use version control for tracking changes.",
//   "Test your code thoroughly before deploying.",
//   "Optimize loops for better performance.",
//   "Understand Big O notation to write efficient code.",
//   "Use meaningful commit messages in Git.",
//   "Write unit tests to catch bugs early.",
//   "Use linting tools to enforce code quality.",
//   "Avoid deep nesting for better readability.",
//   "Keep dependencies updated and secure.",
//   "Use async/await for handling asynchronous tasks.",
//   "Document your code with proper comments.",
//   "Use environment variables for sensitive data.",
//   "Apply the DRY (Don't Repeat Yourself) principle.",
//   "Break large functions into smaller ones.",
//   "Write SQL queries efficiently for better DB performance.",
//   "Choose the right data structure for the job.",
//   "Understand how memory management works.",
//   "Use Git branches to organize development.",
//   "Always sanitize user input to prevent security issues.",
//   "Use HTTPS for secure communication.",
//   "Understand how garbage collection works.",
//   "Use caching mechanisms to improve performance.",
//   "Keep error handling consistent and informative.",
//   "Use logs to track application behavior.",
//   "Write self-explanatory code to reduce documentation needs.",
//   "Follow the Single Responsibility Principle.",
//   "Use dependency injection for better maintainability.",
//   "Write defensive code to prevent unexpected failures.",
//   "Use design patterns appropriately.",
//   "Minimize the use of magic numbers in your code.",
//   "Understand the trade-offs between different algorithms.",
//   "Write efficient database queries to reduce load.",
//   "Keep functions pure and avoid side effects where possible.",
//   "Use feature flags for controlled feature rollouts.",
//   "Understand how event loops work in JavaScript.",
//   "Apply SOLID principles in object-oriented design.",
//   "Use meaningful exception handling techniques.",
//   "Keep business logic separate from presentation logic.",
//   "Optimize front-end assets for faster page loads.",
//   "Understand the benefits of lazy loading.",
//   "Write API documentation for easy integration.",
//   "Keep frontend and backend concerns separated.",
//   "Reduce memory leaks by properly managing resources.",
//   "Use appropriate hashing techniques for passwords.",
//   "Understand how indexing works in databases.",
//   "Write proper error messages for debugging.",
//   "Use correct data serialization formats.",
//   "Apply best practices in API design.",
//   "Understand how cross-origin requests work.",
//   "Keep database queries optimized and indexed.",
//   "Use promises correctly in JavaScript.",
//   "Keep your application scalable with good architecture.",
//   "Use static analysis tools to catch bugs early.",
//   "Understand the benefits of containerization.",
//   "Use security headers to protect web applications.",
//   "Write clear and concise documentation.",
//   "Keep learning and improving your skills.",
//   "Use structured logging for better debugging.",
//   "Use monitoring tools for production applications.",
//   "Write decoupled code for better maintainability.",
//   "Understand how authentication and authorization work.",
//   "Avoid excessive API calls for better performance.",
//   "Use proper status codes in RESTful APIs.",
//   "Optimize front-end rendering techniques.",
//   "Keep third-party dependencies updated.",
//   "Use appropriate message queue systems.",
//   "Understand how to handle rate limiting in APIs.",
//   "Optimize CSS and JS for better performance.",
//   "Keep your Docker images lightweight.",
//   "Use appropriate HTTP methods in APIs.",
//   "Implement proper input validation techniques.",
//   "Understand caching mechanisms and their benefits.",
//   "Use secure protocols for communication.",
//   "Apply appropriate access control measures.",
//   "Understand the impact of network latency.",
//   "Use efficient sorting and searching algorithms.",
//   "Keep microservices well-structured and documented.",
//   "Follow best practices in frontend framework usage.",
//   "Optimize database schema for better performance.",
//   "Use analytics to improve user experience.",
//   "Apply good UI/UX principles in web design.",
//   "Understand how to manage concurrency in applications.",
//   "Use progressive web app features when necessary.",
//   "Write clear, understandable class structures.",
//   "Understand the difference between stateful and stateless services.",
//   "Optimize website accessibility for all users.",
//   "Write portable and cross-platform compatible code.",
//   "Keep deployment pipelines efficient and automated.",
//   "Understand how serverless computing works.",
//   "Use appropriate encryption methods for data security."
// ];

// // Random commit messages
// const commitMessages = [
//   "Refactored some code",
//   "Updated dependencies",
//   "Fixed a minor issue",
//   "Enhanced performance",
//   "Code cleanup",
//   "Updated documentation",
//   "Optimized queries",
//   "Improved stability",
//   "Bug fixes and improvements",
// ];

// // Function to make a commit
// async function makeCommit() {
//     try {
//       // Ensure Git identity is set (Only required once)
//       await git.raw(["config", "--global", "user.name", process.env.SECRET_GITHUB_USER_NAME]);
//       await git.raw(["config", "--global", "user.email", process.env.SECRET_GITHUB_EMAIL]);
  
//       // Check if this is a Git repo
//       const isRepo = await git.checkIsRepo();
//       if (!isRepo) {
//         console.log("⚠️ Not a Git repository. Initializing...");
//         await git.init();
//         await git.addRemote("origin", process.env.SECRET_GIT_REMOTE_URL);
//         await git.fetch();
//       }
  
//       // Ensure remote exists
//       const remotes = await git.getRemotes();
//       const hasOrigin = remotes.some(remote => remote.name === "origin");
//       if (!hasOrigin) {
//         console.log("⚠️ No remote 'origin' found. Adding remote...");
//         await git.addRemote("origin", process.env.SECRET_GIT_REMOTE_URL);
//         await git.fetch();
//       }
  
//       // Ensure branch exists and checkout
//       try {
//         await git.checkout(BRANCH_NAME);
//       } catch (error) {
//         console.log(`⚠️ Branch ${BRANCH_NAME} not found. Creating it...`);
//         await git.checkoutLocalBranch(BRANCH_NAME);
//       }
  
//       // Pull latest changes to avoid conflicts
//       console.log("🔄 Pulling latest changes...");
//       await git.pull("origin", BRANCH_NAME);
  
//       // Modify a dummy file
//       const filePath = "notes.txt";
//       const content = `Commit at ${new Date().toISOString()}\n`;
//       fs.appendFileSync(filePath, content);
  
//       // Git commands
//       await git.add(filePath);
//       await git.commit(commitMessages[Math.floor(Math.random() * commitMessages.length)]);
//       await git.push("origin", BRANCH_NAME);
  
//       console.log("✅ Successfully committed and pushed!");
//     } catch (error) {
//       console.error("❌ Error committing:", error);
//     }
//   }
  
  

// // Function to execute multiple commits (5 to 8 times)
// async function makeMultipleCommits() {
//   const commitCount = Math.floor(Math.random() * 4) + 5; // Random number between 5 and 8
//   console.log(`🔄 Committing ${commitCount} times...`);

//   for (let i = 0; i < commitCount; i++) {
//     await makeCommit();
//     const waitTime = Math.random() * 30 * 60 * 1000; // Random delay between commits (0-30 mins)
//     console.log(`⏳ Waiting ${Math.round(waitTime / 60000)} mins before next commit...`);
//     await new Promise((resolve) => setTimeout(resolve, waitTime));
//   }

//   console.log("✅ All commits completed!");
// }

// // Function to randomly decide if Friday should have commits
// function shouldCommitOnFriday() {
//   return Math.random() < 0.5; // 50% chance to commit on Friday
// }

// // Scheduling commits
// function scheduleCommits() {
//   console.log("📅 Scheduling commits...");

//   // Wednesday: 8 PM - 2 AM
//   schedule.scheduleJob("0 20-23,0,1 * * 3", () => {
//     setTimeout(makeMultipleCommits, Math.random() * 5 * 60 * 60 * 1000);
//   });

//   // Saturday & Sunday: 2 PM - 2 AM
//   schedule.scheduleJob("0 14-23,0,1 * * 6,0", () => {
//     setTimeout(makeMultipleCommits, Math.random() * 12 * 60 * 60 * 1000);
//   });

//   // Random chance to commit on Friday: 2 PM - 2 AM
//   schedule.scheduleJob("0 14-23,0,1 * * 5", () => {
//     if (shouldCommitOnFriday()) {
//       console.log("🎲 Random chance: Committing on Friday!");
//       setTimeout(makeMultipleCommits, Math.random() * 12 * 60 * 60 * 1000);
//     } else {
//       console.log("🚫 No commits on this Friday.");
//     }
//   });

//   console.log("✅ Commit schedule is set.");
// }

// // Start scheduling
// scheduleCommits();

// // Make one commit immediately on startup
// (async () => {
//   console.log("🚀 Making an immediate commit on startup...");
//   await makeCommit();
// })();

const simpleGit = require("simple-git");
const fs = require("fs");
const path = require("path");
const schedule = require("node-schedule");
require("dotenv").config();

const REPO_PATH = ".";
const git = simpleGit(REPO_PATH);

const NOTES_FILE = path.join(__dirname, "notes.txt");

const ABSOLUTE_NOTES_FILE = path.resolve(NOTES_FILE);

const programmingTips = [
  "Always use meaningful variable names.",
  "Write modular and reusable functions.",
  "Keep your functions short and focused.",
  "Avoid global variables whenever possible.",
  "Use comments to explain why, not what.",
  "Follow coding style guides for consistency.",
  "Refactor code regularly to improve readability.",
  "Use version control for tracking changes.",
  "Test your code thoroughly before deploying.",
  "Optimize loops for better performance.",
  "Understand Big O notation to write efficient code.",
  "Use meaningful commit messages in Git.",
  "Write unit tests to catch bugs early.",
  "Use linting tools to enforce code quality.",
  "Avoid deep nesting for better readability.",
  "Keep dependencies updated and secure.",
  "Use async/await for handling asynchronous tasks.",
  "Document your code with proper comments.",
  "Use environment variables for sensitive data.",
  "Apply the DRY (Don't Repeat Yourself) principle.",
  "Break large functions into smaller ones.",
  "Write SQL queries efficiently for better DB performance.",
  "Choose the right data structure for the job.",
  "Understand how memory management works.",
  "Use Git branches to organize development.",
  "Always sanitize user input to prevent security issues.",
  "Use HTTPS for secure communication.",
  "Understand how garbage collection works.",
  "Use caching mechanisms to improve performance.",
  "Keep error handling consistent and informative.",
  "Use logs to track application behavior.",
  "Write self-explanatory code to reduce documentation needs.",
  "Follow the Single Responsibility Principle.",
  "Use dependency injection for better maintainability.",
  "Write defensive code to prevent unexpected failures.",
  "Use design patterns appropriately.",
  "Minimize the use of magic numbers in your code.",
  "Understand the trade-offs between different algorithms.",
  "Write efficient database queries to reduce load.",
  "Keep functions pure and avoid side effects where possible.",
  "Use feature flags for controlled feature rollouts.",
  "Understand how event loops work in JavaScript.",
  "Apply SOLID principles in object-oriented design.",
  "Use meaningful exception handling techniques.",
  "Keep business logic separate from presentation logic.",
  "Optimize front-end assets for faster page loads.",
  "Understand the benefits of lazy loading.",
  "Write API documentation for easy integration.",
  "Keep frontend and backend concerns separated.",
  "Reduce memory leaks by properly managing resources.",
  "Use appropriate hashing techniques for passwords.",
  "Understand how indexing works in databases.",
  "Write proper error messages for debugging.",
  "Use correct data serialization formats.",
  "Apply best practices in API design.",
  "Understand how cross-origin requests work.",
  "Keep database queries optimized and indexed.",
  "Use promises correctly in JavaScript.",
  "Keep your application scalable with good architecture.",
  "Use static analysis tools to catch bugs early.",
  "Understand the benefits of containerization.",
  "Use security headers to protect web applications.",
  "Write clear and concise documentation.",
  "Keep learning and improving your skills.",
  "Use structured logging for better debugging.",
  "Use monitoring tools for production applications.",
  "Write decoupled code for better maintainability.",
  "Understand how authentication and authorization work.",
  "Avoid excessive API calls for better performance.",
  "Use proper status codes in RESTful APIs.",
  "Optimize front-end rendering techniques.",
  "Keep third-party dependencies updated.",
  "Use appropriate message queue systems.",
  "Understand how to handle rate limiting in APIs.",
  "Optimize CSS and JS for better performance.",
  "Keep your Docker images lightweight.",
  "Use appropriate HTTP methods in APIs.",
  "Implement proper input validation techniques.",
  "Understand caching mechanisms and their benefits.",
  "Use secure protocols for communication.",
  "Apply appropriate access control measures.",
  "Understand the impact of network latency.",
  "Use efficient sorting and searching algorithms.",
  "Keep microservices well-structured and documented.",
  "Follow best practices in frontend framework usage.",
  "Optimize database schema for better performance.",
  "Use analytics to improve user experience.",
  "Apply good UI/UX principles in web design.",
  "Understand how to manage concurrency in applications.",
  "Use progressive web app features when necessary.",
  "Write clear, understandable class structures.",
  "Understand the difference between stateful and stateless services.",
  "Optimize website accessibility for all users.",
  "Write portable and cross-platform compatible code.",
  "Keep deployment pipelines efficient and automated.",
  "Understand how serverless computing works.",
  "Use appropriate encryption methods for data security."
];

async function makeCommit() {
  try {
    await git.addConfig("user.name", process.env.SECRET_GITHUB_USER_NAME);
    await git.addConfig("user.email", process.env.SECRET_GITHUB_EMAIL);

    if (!fs.existsSync(ABSOLUTE_NOTES_FILE)) {
      fs.writeFileSync(ABSOLUTE_NOTES_FILE, "Programming Tips:\n");
    }

    const currentLines = fs.readFileSync(ABSOLUTE_NOTES_FILE, "utf8").split("\n");
    const newLine = programmingTips[currentLines.length % programmingTips.length];

    const timestamp = new Date().toISOString();
    const finalLine = `${newLine} - ${timestamp}`;

    fs.appendFileSync(ABSOLUTE_NOTES_FILE, finalLine + "\n");

    await git.add(ABSOLUTE_NOTES_FILE);
    await git.commit(finalLine);
    await git.push(process.env.SECRET_GIT_REMOTE_URL, process.env.SECRET_BRANCH_NAME);

    console.log("✅ Successfully committed and pushed:", finalLine);
  } catch (error) {
    console.error("❌ Error committing:", error);
  }
}


async function makeMultipleCommits() {
  const commitCount = Math.floor(Math.random() * 4) + 5;
  console.log(`🔄 Committing ${commitCount} times...`);
  for (let i = 0; i < commitCount; i++) {
    await makeCommit();
    const waitTime = Math.random() * 30 * 60 * 1000;
    console.log(`⏳ Waiting ${Math.round(waitTime / 60000)} mins before next commit...`);
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }
  console.log("✅ All commits completed!");
}

function shouldCommitOnFriday() {
  return Math.random() < 0.5;
}

function scheduleCommits() {
  console.log("📅 Scheduling commits...");

  schedule.scheduleJob("0 20-23,0,1 * * 3", () => {
    console.log("⏰ Cron triggered: Wednesday");
    setTimeout(makeMultipleCommits, Math.random() * 5 * 60 * 60 * 1000);
  });

  schedule.scheduleJob("0 14-23,0,1 * * 6,0", () => {
    console.log("⏰ Cron triggered: Weekend (Sat/Sun)");
    setTimeout(makeMultipleCommits, Math.random() * 12 * 60 * 60 * 1000);
  });

  schedule.scheduleJob("0 14-23,0,1 * * 5", () => {
    if (shouldCommitOnFriday()) {
      console.log("🎲 Random chance: Committing on Friday!");
      setTimeout(makeMultipleCommits, Math.random() * 12 * 60 * 60 * 1000);
    } else {
      console.log("🚫 No commits on this Friday.");
    }
  });

  console.log("✅ Commit schedule is set.");
}

scheduleCommits();
(async () => {
  console.log("🚀 Making an immediate commit on startup...");
  await makeCommit();
})();
