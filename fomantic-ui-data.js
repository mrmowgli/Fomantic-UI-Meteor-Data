var fs = Npm.require('fs');

fomanticUiDataPackage = {};

fomanticUiDataPackage.getTextFile = function (filePath) {
  return Assets.getText(filePath);
};

fomanticUiDataPackage.getBinaryFile = function (filePath) {
  return Assets.getBinary(filePath);
};
