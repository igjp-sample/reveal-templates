const dashboard = await new Promise<RevealApi.RVDashboard>((resolve) => $.ig.RVDashboard.loadDashboard("Manufacturing", resolve));

const revealView = new $.ig.RevealView("#revealView");
revealView.dashboard = dashboard;

revealView.onDataSourcesRequested = (callback) => {
  // An example of a local Excel file data source
  const localFileItem = new $.ig.RVLocalFileDataSourceItem();
  localFileItem.uri = "local:/Samples.xlsx";
  const excelDataSourceItem = new $.ig.RVExcelDataSourceItem(localFileItem);
  excelDataSourceItem.title = "Local Excel File";

  callback(new $.ig.RevealDataSources([], [excelDataSourceItem], true));
};
