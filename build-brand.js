const fs = require("fs");
const path = require("path");

// Get brand from command line argument
const brand = process.argv[2] || "brand1";

console.log(`Setting up configuration for ${brand}...`);

// Define paths
const configPath = path.join(__dirname, "app/config", brand);
const appJsonPath = path.join(configPath, "app.json");
const targetAppJsonPath = path.join(__dirname, "app.json");
const assetsSourcePath = path.join(configPath, "assets");
const assetsTargetPath = path.join(__dirname, "assets");

// Check if brand config exists
if (!fs.existsSync(appJsonPath)) {
  console.error(`Configuration for ${brand} not found at ${appJsonPath}`);
  process.exit(1);
}

// Copy the brand's app.json to the root
try {
  fs.copyFileSync(appJsonPath, targetAppJsonPath);
  console.log(`Successfully copied app.json for ${brand}`);
} catch (error) {
  console.error("Error copying app.json:", error);
  process.exit(1);
}

// Copy assets if they exist
if (fs.existsSync(assetsSourcePath)) {
  // Create assets directory if it doesn't exist
  if (!fs.existsSync(assetsTargetPath)) {
    fs.mkdirSync(assetsTargetPath, { recursive: true });
  }

  // Copy all files from source assets to target assets
  const files = fs.readdirSync(assetsSourcePath);
  files.forEach((file) => {
    const sourceFile = path.join(assetsSourcePath, file);
    const targetFile = path.join(assetsTargetPath, file);
    fs.copyFileSync(sourceFile, targetFile);
  });

  console.log(`Successfully copied assets for ${brand}`);
}

console.log(`Successfully set up ${brand} configuration`);
