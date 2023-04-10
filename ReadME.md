Before you can deploy your React application, you need to build the application using `Parcel`. 
`Parcel` generates the final HTML, CSS, and JS files and save them in the `dist` folder.

Please execute the following commands inside the example folder.
 
1. Initialize the project: `npm init -y`
2. Add the following line to the `package.json` file: `"source": "index.html",` . This is the souce file that contains your application.
3. Install the `parcel` build tool: `sudo npm install -g parcel --save-dev`
4. Install the necessary React libraries: `npm install react react-dom react-router-dom` 
5. 