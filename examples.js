// Theme toggle
const themeToggle = document.querySelector("[nu_theme-toggle]");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("nu_dark-mode");
});

// Notifications
notifyUtil.configure({});

// Via Buttons
const example1 = document.querySelector("[nu_example-1]");
example1.addEventListener("click", () => {
  new notifyUtil.Notification({
    type: "info",
    heading: "Info",
    body: "Lorem ipsum dolor sit amet, adipiscing elit.",
    duration: 2000,
  });
});
const example2 = document.querySelector("[nu_example-2]");

example2.addEventListener("click", async () => {
  const spinner = new notifyUtil.Notification({
    type: "spinner",
    heading: "Loading...",
    body: "Sit tight.",
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  spinner.update({
    heading: "Loading...",
    body: "Almost there...",
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.close();
  new notifyUtil.Notification({
    type: "success",
    heading: "Done!",
    body: "Cool huh?",
  });
});

// Via notification examples
const examples = {
  info: document.querySelector("[nu-info]"),
  success: document.querySelector("[nu-success]"),
  warning: document.querySelector("[nu-warning]"),
  error: document.querySelector("[nu-error]"),
  debug: document.querySelector("[nu-debug]"),
  spinner: document.querySelector("[nu-spinner]"),
};

Object.keys(examples).forEach((key) => {
  // add click cursor
  examples[key].style.cursor = "pointer";
  if (key === "spinner") {
    examples[key].addEventListener("click", async () => {
      const spinner = new notifyUtil.Notification({
        type: "spinner",
        heading: "Loading...",
        body: "Sit tight.",
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      spinner.update({
        heading: "Loading...",
        body: "Almost there...",
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      spinner.close();
    });
  } else {
    examples[key].addEventListener("click", () => {
      new notifyUtil.Notification({
        type: key,
        heading: key.charAt(0).toUpperCase() + key.slice(1),
        body: "Lorem ipsum dolor sit amet, adipiscing elit.",
      });
    });
  }
});
