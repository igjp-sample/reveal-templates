import {
  RVDashboard,
  RevealView,
  RVLocalFileDataSourceItem,
  RVExcelDataSourceItem,
  RevealDataSources,
} from "reveal-sdk";

const dashboard = await RVDashboard.loadDashboard("Manufacturing");

const revealView = new RevealView("#revealView");
revealView.dashboard = dashboard;

revealView.onDataSourcesRequested = (callback) => {
  // An example of a local Excel file data source
  const localFileItem = new RVLocalFileDataSourceItem();
  localFileItem.uri = "local:/Samples.xlsx";
  const excelDataSourceItem = new RVExcelDataSourceItem(localFileItem);
  excelDataSourceItem.title = "Local Excel File";

  callback(new RevealDataSources([], [excelDataSourceItem], true));
};
