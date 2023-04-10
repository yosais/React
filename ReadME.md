Before you can deploy your React application, you need to build the application using `Parcel` (https://parceljs.org). 
`Parcel` generates the final HTML, CSS, and JS files and save them in the `dist` folder.

Please execute the following commands inside the example folder.
 
1. Initialize the project: `npm init -y`
2. Add the following line to the `package.json` file: `"source": "index.html",` . This is the souce file that contains your application.
3. Install the `parcel` build tool: `sudo npm install -g parcel --save-dev`
4. Install the necessary React libraries: `npm install react react-dom react-router-dom` 
5. Build the application using the `parcel` command. This command also runs a local server for previewing your Web application: `parcel`
6. To preview the application within your Google Cloud Worksatation, duplicate the Tab and then change the port number to the one shown by `parcel`.
7. To generate the `FINAL` HTML, CSS, and JS files, run the following command: `parcel build` . The files will be saved in the `dist` folder.
8. To teset your `FINAL` application, terminate the `parcel` server. After that, change directory to the folder `dist`. Inside this folder, run the following command: `python3 -m http.server` .
9. To preview the final application within your Google Cloud Worksatation, duplicate the Tab and then change the port number to the one shown by the `python` built-in server.
10. You deploy the files in the folder `dist`.