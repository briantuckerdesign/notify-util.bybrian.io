See [notify-util](https://github.com/briantuckerdesign/notify-util) repo for the actual tool.

This is just the example site.

This is the code from the two examples on the site:

````typescript
notifyUtil.configure({});

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
```
````
