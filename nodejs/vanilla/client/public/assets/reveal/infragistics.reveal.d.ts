declare namespace RevealApi{
	/**
 * Represent a cell in the visualization data, includes.
 * Used in some {@link RevealView} events like:
 *  - {@link RevealView.onVisualizationDataPointClicked}
 *  - {@link RevealView.onTooltipShowing} & {@link TooltipShowingEventArgs}
 */
class RVCell {
    /**
     * The name of the column this cell belongs to.
     */
    columnName: null;
    /**
     * The label of the column this cell belongs to.
     */
    columnLabel: null;
    /**
     * The value of the cell.
     */
    value: null;
    /**
     * The formatted value of the cell.
     */
    formattedValue: null;
    constructor();
}
//# sourceMappingURL=rvCell.d.ts.map

/**
 * @enum
 */
enum RVChartType {
    Pivot = "Pivot",
    Grid = "Grid",
    AreaChart = "AreaChart",
    BarChart = "BarChart",
    BubbleChart = "BubbleChart",
    CandlestickChart = "CandlestickChart",
    ColumnChart = "ColumnChart",
    ComboChart = "ComboChart",
    DoughnutChart = "DoughnutChart",
    FunnelChart = "FunnelChart",
    LineChart = "LineChart",
    OHLC_Chart = "OHLC_Chart",
    PieChart = "PieChart",
    RadialLineChart = "RadialLineChart",
    ScatterChart = "ScatterChart",
    SplineChart = "SplineChart",
    SplineAreaChart = "SplineAreaChart",
    StackedAreaChart = "StackedAreaChart",
    StackedBarChart = "StackedBarChart",
    StackedColumnChart = "StackedColumnChart",
    StepAreaChart = "StepAreaChart",
    StepLineChart = "StepLineChart",
    RadialGauge = "RadialGauge",
    BulletGraph = "BulletGraph",
    LinearGauge = "LinearGauge",
    LabelGauge = "LabelGauge",
    TreeMap = "TreeMap",
    Image = "Image",
    DIY = "DIY",
    TextView = "TextView",
    Indicator = "Indicator",
    IndicatorTarget = "IndicatorTarget",
    Sparkline = "Sparkline",
    TextBox = "TextBox",
    Choropleth = "Choropleth",
    ScatterMap = "ScatterMap",
    TimeSeriesChart = "TimeSeriesChart"
}
//# sourceMappingURL=rvChartType.d.ts.map

/**
 * Class representing a possible value for a dashboard filter, retrieved from {@link RVDashboardFilter.getFilterValues}
 */
class RVFilterValue {
    /**
   * The dictionary with all values associated to this filter value, this object needs to be used when setting selected values for the filter.
   */
    value: any;
    /**
   * The label used to show this value to the user.
   */
    label: any;
    /** @ignore */
    constructor(value: any, label: string | null);
}
//# sourceMappingURL=rvFilterValue.d.ts.map

/**
 * @enum
 */
enum RVFilterType {
    AllValues = 0,
    FilterEmptyValues = 1,
    SelectedValues = 2,
    FilterByRule = 3
}
//# sourceMappingURL=rvFilterType.d.ts.map

/**
 * @enum
 */
enum RVDateFilterType {
    /**No filter defined, all time is included */
    AllTime = "allTime",
    /**Custom range, an instance of $.ig.RVDateRange must be set in the range property. */
    CustomRange = "customRange",
    /**Last 7 days*/
    LastWeek = "lastWeek",
    /**Last 30 days*/
    LastMonth = "lastMonth",
    /**Last 365 days*/
    LastYear = "lastYear",
    /**From Jan 1st this year to today*/
    YearToDate = "yearToDate",
    /**From the first day of the current quarter*/
    QuarterToDate = "quarterToDate",
    /**From the first day of the current month*/
    MonthToDate = "monthToDate",
    /**Yesterday*/
    Yesterday = "yesterday",
    /**Today*/
    Today = "today",
    /**This month, including the rest of it*/
    ThisMonth = "thisMonth",
    /**This quarter, including the rest of it*/
    ThisQuarter = "thisQuarter",
    /**This year, including the rest of it. From Jan 1st to Dec 31st of the current year*/
    ThisYear = "thisYear",
    /**The previous month*/
    PreviousMonth = "previousMonth",
    /**The previous quarter*/
    PreviousQuarter = "previousQuarter",
    /**The previous year*/
    PreviousYear = "previousYear",
    /**The next month*/
    NextMonth = "nextMonth",
    /**The next quarter*/
    NextQuarter = "nextQuarter",
    /**The next year*/
    NextYear = "nextYear",
    /**The last 12 complete months*/
    TrailingTwelveMonths = "trailingTwelveMonths",
    /**New implementation for date rules*/
    CustomRule = "customRule"
}
//# sourceMappingURL=rvDateFilterType.d.ts.map

/**
 * Class used to represent a date range for filtering.
 */
class RVDateRange {
    /** @ignore */
    get internalRange(): any;
    /** The beginning of the range. */
    from: Date;
    /** The end of the range.*/
    to: Date;
    /** @ignore */
    constructor();
    /** @ignore */
    constructor(range: any);
    /**
     * Creates a new date range with the specified values for From and To properties
     * @param from The beginning of the range
     * @param to The end of the range
     */
    constructor(from?: Date, to?: Date);
}
//# sourceMappingURL=rvDateRange.d.ts.map

/**
 * @enum
 */
enum RVPeriodRelation {
    All = 0,
    Last = 1,
    Previous = 2,
    ToDate = 3,
    This = 4,
    Next = 5
}
//# sourceMappingURL=rvPeriodRelation.d.ts.map

/**
 * @enum
 */
enum RVPeriodType {
    Day = 0,
    Week = 1,
    Month = 2,
    Quarter = 3,
    Semester = 4,
    Year = 5
}
//# sourceMappingURL=rvPeriodType.d.ts.map

/**
 * Class used to represent a date rule for filtering.
 */
class RVDateRule {
    _rule: any;
    static readonly AllTime: Readonly<RVDateRule>;
    /** @ignore */
    constructor(rule: any);
    constructor(periodRelation: RVPeriodRelation, periodType: RVPeriodType);
    constructor(periodRelation: RVPeriodRelation, periodCount: number, periodType: RVPeriodType);
    /**
     * Relation of the rule's time period to the current date.
     */
    get periodRelation(): RVPeriodRelation;
    /**
     * Type of time period used as time unit for the rule's period.
     */
    get periodType(): RVPeriodType;
    /**
     * Amount of periods to be counted.
     */
    get count(): number;
    private convertRVPeriodRelation;
    private convertPeriodRelation;
    private convertRVPeriodType;
    private convertPeriodType;
}
//# sourceMappingURL=rvDateRule.d.ts.map

/** Class used to represent a visualization filter. */
class RVVisualizationFilter {
    /** @ignore */
    _filterModel: any;
    /** @ignore */
    _xmlaFilterModel: any;
    /** @ignore */
    _visualization: RVVisualization;
    /** @ignore */
    _selectedValues: RVFilterValue[];
    private _fieldName;
    private _filterType;
    private _customRule;
    private _dateRuleType;
    private _dateRange;
    constructor(fieldName: string, filterType: RVFilterType, selectedValues: any[], //array of FilterValue
    visualization: RVVisualization, filterModel: any, dateRuleType: RVDateFilterType | RVDateRule | null, dateRange: RVDateRange | null);
    /** Name of the field to which the filter is bound. */
    get fieldName(): string;
    /** Type of the filter (All Values, Filter Empty Values, Selected Values, Filter By Rule). */
    get filterType(): RVFilterType;
    /** Type of rule for date filters. */
    get rule(): RVDateRule | null;
    /** Type of legacy rule for date filters having type "Filter By Rule". */
    get dateRuleType(): RVDateFilterType | null;
    /**
     The date range used for filtering.
     When dateRuleType is CustomRange, it returns the custom range configured in the filter.
     When set to another filter type, it returns the range corresponding to the configured filter type calculated relative to the present time.
    */
    get dateRange(): RVDateRange | null;
    /**
     The date range used for filtering.
     Only applicable when dateRuleType is CustomRange.
    */
    set dateRange(value: RVDateRange | null);
    /**
     Get the filter's selected values as an array of string, integer or date, depending on the field type.
     An empty list means all available values are selected.
    */
    get selectedValues(): Array<object>;
    /**
     Set the filter's selected values.
     The list is to be specified as an array of string, integer or date, depending on the field type.
     An empty list means all available values are selected.
    */
    set selectedValues(v: Array<object>);
    /**
      Method used to get the possible values for a given filter. For a Country filter, this will return the list of all countries,
      not only the selected ones.
      You can use this method to create your own UI to select filter values.
     */
    getFilterValues(): Promise<RVFilterValue[]>;
    /**
      Centralized check for actions that are only valid for filters of type SelectedValues.
     */
    validateSelValuesFilter(): void;
}

class QuickFiltersArray extends Array<RVVisualizationFilter> {
    /**
     * Gets the first filter with the given field name.
     *
     * @param {string} fieldName The field name to search for.
     * @returns {$.ig.RVDashboardFilter} The first filter with the given field name (case sensitive), null if there's no filter with that title.
     */
    getByFieldName(fieldName: string): RVVisualizationFilter | null;
}
//# sourceMappingURL=quickFiltersArray.d.ts.map

interface IRVDashboardFilter {
    id: string;
    title: string;
}
//# sourceMappingURL=irvDashboardFilter.d.ts.map

/** Class used to represent a dashboard filter. */
class RVDashboardFilter implements IRVDashboardFilter {
    /** @ignore */
    _filterModel: any;
    /** @ignore */
    _dashboard: RVDashboard;
    /** @ignore */
    _selectedValues: Array<Object>;
    /** @ignore */
    constructor(filterModel: any);
    /** The ID of the filter. */
    get id(): string;
    /** The title of the filter. */
    get title(): string;
    /** Get/sets filter's selected values. No items in the enumeration means all available values are selected. */
    get selectedValues(): Array<object>;
    set selectedValues(v: Array<object>);
    /**
     * Retrieves available filter values to be selected.
     * @param callback Will be invoked and the available values will be passed as an argument.
     * @param errorCallback Will be called in case of error.
     */
    getFilterValues(): Promise<RVFilterValue[]>;
    getFilterValues(callback: (values: RVFilterValue[]) => void, errorCallback: (error: any) => void): void;
}
//# sourceMappingURL=rvDashboardFilter.d.ts.map

/**
 * Class representing the optional date filter defined in a dashboard model.
 */
class RVDateDashboardFilter {
    /** @ignore */
    _filterModel: any;
    /**
     * The legacy date rule used for filtering. Eg. YearToDate, MonthToDate, CustomRange, etc.
     */
    get dateFilterType(): RVDateFilterType;
    /** @ignore */
    _filterChanged: ((filter: RVDateDashboardFilter) => void) | null;
    /**
     * The date rule used for filtering.
     * If set to a non-null value, it will null out the filter's CustomDateRange property.
     */
    get rule(): RVDateRule | null;
    set rule(v: RVDateRule | null);
    /**
     * The date range used for filtering.
     * If set to a non-null value, it will null out the filter's CustomRule property.
     */
    get range(): RVDateRange | null;
    set range(v: RVDateRange | null);
    /** @ignore */
    constructor(filterTypeOrRangeOrRule: RVDateFilterType | RVDateRule | RVDateRange | null, range: RVDateRange | null, filterModel: any);
    get id(): string;
    get title(): string;
    /** @ignore */
    set title(v: string);
}
//# sourceMappingURL=rvDateDashboardFilter.d.ts.map

/**
 * @hidden
 */
class SdkDocumentDelegate {
    _dashboard: RVDashboard;
    constructor(dashboard: RVDashboard);
    widgetAdded(widget: any, index: number): void;
    titleUpdated(newTitle: string): void;
    widgetDeleted(index: number): void;
    widgetMoved(from: number, to: number): void;
    widgetUpdated(widget: any): void;
    dashboardFilterUpdated(filter: any, index: number): void;
    dashboardFilterDeleted(filter: any, index: number): void;
    dashboardFilterAdded(filter: any, index: number): void;
    dashboardDocumentChanged(newDashboard: any): void;
    dashboardDocumentHasChangesModified(hasPendingChanges: boolean): any;
}

/** Provides information about where data sources are being requested, one of visualization, dashboard filter or data blending */
enum RVDataSourcesRequestedTriggerType {
    /**Visualization */
    Visualization = "visualization",
    /**Dashboard Filter */
    DashboardFilter = "dashboardFilter",
    /**Data Blending*/
    DataBlending = "dataBlending"
}
//# sourceMappingURL=rvDataSoucesRequestedTriggerType.d.ts.map

/**
 *  The class contains custom theme settings about conditional formatting.
 *  See {@link RevealTheme.conditionalFormatting}.
 */
class RVConditionalFormatting {
    /** Conditional formatting color for HI values*/
    hiColor: string;
    /** Conditional formatting color for MID values*/
    midColor: string;
    /** Conditional formatting color for LOW values*/
    lowColor: string;
    /** Conditional formatting color when NO VALUE*/
    noneColor: string;
    constructor();
}
//# sourceMappingURL=rvConditionalFormatting.d.ts.map

/**
 * Class defining a theme to be used to render {@link RevealView} with.
 * When instantiated it has the values for the default reveal theme.
 * Create an instance tune it as you like and then set it to {@link RevealSdkSettings.theme}.
 * You should set the theme before RevealView is rendered.
 */
class RevealTheme {
    /**@hidden */
    static _oceanTheme: any;
    /**@hidden */
    static _mountainTheme: any;
    /**@hidden */
    isDark: Boolean;
    /**@hidden */
    isOceanBased: Boolean;
    /**
     * The list of chart colors. This color palette could have any number of elements.
     * Once the list is finished, Reveal will start auto generating shade of these colors.
     * ```javascript
     * theme.chartColors = ["rgb(255,0,0)","rgb(0,255,0)", "rgb(0,0,255)"];
     * ```
     * */
    chartColors: string[];
    /**
     * The list of background colors displayed as the palette when selecting the background
     * color for a visualization. This color palette could have any number of elements.
     */
    backgroundColors: string[];
    /** Conditional Formatting set of colors HI, MID, LOW and NONE values.*/
    conditionalFormatting: RVConditionalFormatting;
    /**
     * Highlighting color that is used on specific scenarios for dashboards (forecast and outliers).
     * ```javascript
     * theme.highlightColor = "rgb(255,0,0)";
     * ```
     * */
    highlightColor: string;
    /** Font family used for regular font style */
    regularFont: string;
    /**
     * Font family used for medium font style
     * */
    mediumFont: string;
    /** Font family used for bold font style */
    boldFont: string;
    /** Font family used for bold italic font style */
    boldItalicFont: string;
    /** Font color */
    fontColor: string;
    /** Font family used for italic font style */
    italicFont: string;
    /** Main background color */
    dashboardBackgroundColor: string;
    /** Visualizations, modals, list-items... secondary background color */
    visualizationBackgroundColor: string;
    /** Gets or sets the margin around the visualization. The space around the visualization. Default is 2. */
    visualizationMargin: number;
    /** Accent color */
    accentColor: string;
    /**
     * Rounded corners in buttons, tooltips, containers, visualizations, etc.
     * If false, squared corners will be shown
     * */
    useRoundedCorners: Boolean;
    _contextId: string;
    constructor();
    /** Clones the current theme */
    clone(): RevealTheme;
    /**@hidden */
    protected initTheme(isDark: Boolean, isOceanBased: Boolean): void;
    /**@hidden */
    static initialize(): void;
}
/**
 * Dark version of the Mountain theme
 */
class MountainDarkTheme extends RevealTheme {
    constructor();
}
/**
 * Light version of the Mountain theme
 */
class MountainLightTheme extends RevealTheme {
    /**@hidden */
    constructor();
}
/**
 * Dark version of the Ocean theme
 */
class OceanLightTheme extends RevealTheme {
    /**@hidden */
    constructor();
}
/**
 * Light version of the Ocean theme
 */
class OceanDarkTheme extends RevealTheme {
    /**@hidden */
    constructor();
}
//# sourceMappingURL=revealTheme.d.ts.map

/** This class represents the chart settings for a visualization.
 * See {@link RevealView.setVisualizationChartSettings} method.
*/
class RVChartSettings {
    /** Minimum value for left axis. */
    leftAxisMinValue: number | null;
    /** Maximum value for left axis.  */
    leftAxisMaxValue: number | null;
    /** Minimum value for right axis (if present). */
    rightAxisMinValue: number | null;
    /** Maximum value for right axis (if present). */
    rightAxisMaxValue: number | null;
    /** @hidden */
    constructor();
}
//# sourceMappingURL=rvChartSettings.d.ts.map

/**
 *The class used as the argument to the onSave event.
 */
class DashboardSaveEventArgs {
    /**
     *  The name of the dashboard being saved, that could have been modified by the end user by editing the title.
     */
    name: string;
    /**
     * The ID of the dashboard being saved, for existing dashboards this is the ID used when loading it. For new dashboards or "save as"
     * operation the value will be null.
     * You should set the value of this property when "saving as" an existing dashboard or saving a new one before calling saveFinished,
     * if not set it will be assumed to match the dashboard name.
     */
    dashboardId: string | null;
    private _revealView;
    private _saveAs;
    private _isNew;
    constructor(saveAs: Boolean, name: string, revealView: any, dashboardId: string);
    /**
     *  A flag indicating if this event was originated by a 'save' (false) or 'save as' (true) operation.
     */
    get saveAs(): Boolean;
    /**
     * A flag indicating if this event was originated by saving a newly created dashboard, it will be false
     * when saving or "saving as" an existing dashboard.
     * @deprecated This property is deprecated and will soon be removed. Returns true only if the dashboardId is null.
     * In the future, determining whether the dashboard is new will not be the responsibility of the SDK.
     */
    get isNew(): Boolean;
    /**
     * Serializes the current dashboard to the '.rdash' file format, using the current name.
     * @param {(data: Uint8Array) => void} callback  This is the callback function used to receive the serialized dashboard in '.rdash' file format.
     * @param {(string) => void} errorCallback  This is the callback function invoked when an error occurs
     */
    serialize(callback: (data: Uint8Array) => void, errorCallback: (errorMessage: string) => void): void;
    /**
     * Serializes the current dashboard to the '.rdash' file format with the name provided.
     * @param {string} newName The new name for the dashboard.
     * @param {(data: Uint8Array) => void} callback This is the callback function used to receive the serialized dashboard in '.rdash' file format.
     * @param {(string) => void} errorCallback This is the callback function invoked when an error occurs
     */
    serializeWithNewName(newName: string, callback: (data: Uint8Array) => void, errorCallback: (errorMessage: string) => void): void;
    /**
     * Notifies the Reveal SDK the save operation has finished and it should switch to view mode.
     * When using server side saving and for a new dashboard or for the "save as" operation it expects:
     *  - name to be set to the name entered by the end user, that value will be set as the title for the displayed dashboard.
     *  - dashboardId to be set to the assigned id, this value will be used for subsequent save operations, name will be used as the ID if dashboardId is not set.
     */
    saveFinished(): void;
}
//# sourceMappingURL=dashboardSaveEventArgs.d.ts.map

/**
 * Class representing the event arguments visualizationEditorClosing event
 * @see {@link RevealView.onVisualizationEditorClosing}
 */
class VisualizationEditorClosingArgs {
    /**
     *  The visualization after the changes made in the editor.
     */
    visualization: RVVisualization;
    /**
     * Property indicating whether this is a brand new visualization the end user is trying to close.
     */
    isNewVisualization: Boolean;
    /**
     * Set this to true in case you need to reset any changes the end user might have done.
     */
    resetVisualization: boolean;
    /**
     * Set this to true to cancel closing of the visualization
     */
    cancel: boolean;
    /** @ignore */
    constructor(visualization: RVVisualization, isNewVisualization: Boolean);
}
//# sourceMappingURL=visualizationEditorClosingArgs.d.ts.map

/**
 * The type of the event arguments of the onVisualizationEditorClosed event.
 */
class VisualizationEditorClosedEventArgs {
    /**
     *  The visualization after the changes made in the editor.
     */
    visualization: RVVisualization;
    /**
     * This property is true if it is a new visualization that has been created.
     */
    isNewVisualization: Boolean;
    /**
     * This property is true if the editor was closed by discarding the changes (pressing the X button).
     */
    isCancelled: Boolean;
    /** @ignore */
    constructor(visualization: RVVisualization, isNewVisualization: Boolean, isCancelled: Boolean);
}
//# sourceMappingURL=visualizationEditorClosedEventArgs.d.ts.map

/**
* This class represents an object that is used to show an image within the customized app user interface.
*/
class RVImage {
    private _int;
    /** @ignore */
    constructor(source: string, altText: string | null);
    /**
    * Retrieve the internal intermediate element used to represent the menu item.
    */
    get revealElement(): object;
    /**
    * Retrieve the alt text for the image. The purpose of this is to provide a description and context for the image which is typically used to improve accessibility.
    */
    get altText(): string | null;
    /**
    * Alt text for the image. The purpose of this is to provide a description and context for the image which is typically used to improve accessibility.
    */
    set altText(value: string | null);
    /**
    * Retrieve the source of the graphic to use as an image.
    */
    get source(): string;
    /**
    * The source of the graphic to use as an image.
    */
    set source(value: string);
}

/**
* Base class representing an object that is used to show an icon, and title text of a menu item.
*/
class RVMenuItemBase {
    /** @ignore */
    protected _int: any;
    /** @ignore */
    constructor();
    /**
    * Retrieve the internal intermediate element used to represent the menu item.
    */
    get revealElement(): object;
    /**
    * Retrieve the internal application supplied item used to represent the menu item.
    */
    get appSuppliedItem(): object | null;
    /**
    * Assign the internal application supplied item used to represent the menu item.
    */
    set appSuppliedItem(value: object | null);
    /**
    * Retrieve the icon shown to the left of the menu label.
    */
    get icon(): object | null;
    /**
    * Icon shown to the left of the menu label.
    */
    set icon(value: object | null);
    /**
    * Retrieve the property that determines if a menu item was internally supplied.
    */
    get isAppSupplied(): boolean;
    /**
    * A set-once property to determine if a menu item was internally supplied.
    */
    set isAppSupplied(value: boolean);
    /**
    * Retrieve property used to determine if the menu item will be hidden from view.
    */
    get isHidden(): boolean;
    /**
    * Property used to determine if the menu item should be hidden from view.
    */
    set isHidden(value: boolean);
    /**
    * Retrieve the string used as the label for the menu item.
    */
    get title(): string;
    /**
    * A string used as the label for the menu item.
    */
    set title(value: string);
}

/**
 * The class used as the argument to the onClick event from RVTooltipItem.
 */
class TooltipItemClickEventArgs {
    /**
     *  The visualization for which a tooltip item was clicked.
     */
    visualization: RVVisualization;
    /**
     * The data cell for which a tooltip item was clicked.
     */
    cell: RVCell;
    /**
     * The whole data row for which a tooltip item was clicked.
     */
    row: RVCell[];
    /** @ignore */
    constructor(visualization: RVVisualization, cell: RVCell, cells: RVCell[]);
}
//# sourceMappingURL=tooltipItemClickEventArgs.d.ts.map

/**
 * This class represents a tooltip item that is shown when the user hovers over a chart.
 */
class RVTooltipItem extends RVMenuItemBase {
    /**
     * Initializes a new instance of the RVTooltipItem class.
     *
     * @param group - Group header that appears above the menu options.
     * @param title - Title of the menu option.
     * @param icon - Icon shown to the left of the menu label. The type accepted as the icon object is a string pointing to a URL or an RVImage instance.
     * @param onClick - Action to be executed when the menu option is clicked.
     */
    constructor(group: string, title: string, icon: string | RVImage | null, onClick: (sender: RVTooltipItem, args: TooltipItemClickEventArgs) => void);
    /**
     * Retrieve the internal intermediate element used to represent the tooltip item.
     */
    get revealElement(): object;
    /**
     * Retrieve the group header that appears above the menu options.
     */
    get group(): string | null;
    /**
     * The group header that appears above the menu options.
     */
    set group(value: string | null);
    /**
     * Retrieve the action to be executed when the menu option is clicked.
     */
    get onClick(): (sender: RVTooltipItem, args: TooltipItemClickEventArgs) => void;
    /**
     * The action to be executed when the menu option is clicked.
     */
    set onClick(value: (sender: RVTooltipItem, args: TooltipItemClickEventArgs) => void);
}

/**
 * The class used as the argument to the onTooltipShowing event.
 */
class TooltipShowingEventArgs {
    /**
     *  The visualization for which a tooltip is about to be shown.
     */
    visualization: RVVisualization;
    /**
     * The data cell for which a tooltip is about to be shown.
     */
    cell: RVCell;
    /**
     * The whole data row for which a tooltip is about to be shown.
     */
    row: RVCell[];
    /**
     * A flag which if set to true will disable the rendering of the tooltip.
     */
    cancel: boolean;
    /**
     * An array of RVTooltipItem objects for showing custom menu items in the tooltip.
     */
    customItems: Array<RVTooltipItem>;
    /** @ignore */
    constructor(visualization: RVVisualization, cell: RVCell, cells: RVCell[]);
}
//# sourceMappingURL=tooltipShowingEventArgs.d.ts.map

/**
 * Class representing the event arguments visualizationEditorOpening event
 * @see {@link RevealView.onVisualizationEditorOpening}
 */
class VisualizationEditorOpeningArgs {
    /**
     * Property indicating whether this is a brand new visualization the end user is trying to edit.
     */
    isNewVisualization: Boolean;
    /**
     * Set this to true to cancel opening the visualization
     */
    cancel: boolean;
    /**
     * The visualization that the user is trying to edit
     */
    visualization: RVVisualization;
    /** @ignore */
    constructor(visualization: RVVisualization, isNewVisualization: Boolean);
}
//# sourceMappingURL=visualizationEditorOpeningArgs.d.ts.map

/**
 * The type of the event arguments of the onVisualizationEditorOpened event.
 */
class VisualizationEditorOpenedEventArgs {
    /**
   *  The visualization being edited.
   */
    visualization: RVVisualization;
    /**
   * This property is true if it is a new visualization that is being created.
   */
    isNewVisualization: Boolean;
    /** @ignore */
    constructor(visualization: RVVisualization, isNewVisualization: Boolean);
}
//# sourceMappingURL=visualizationEditorOpenedEventArgs.d.ts.map

type nullableString = string | null;
type nullableDate = Date | null;
interface IKnownType {
    getType(): string;
}

/**
 * The base class representing a data source used in a dashboard, you can
 * RVDataSourceItem for more information about the relationship between data source and data source items.
 */
abstract class RVDashboardDataSource implements IKnownType {
    private _id;
    private _defaultRefreshRate;
    /**
     * The ID of the data source
     */
    get id(): nullableString;
    set id(value: nullableString);
    private _title;
    /**
     *  The title of the data source as displayed to users.
     */
    get title(): nullableString;
    set title(value: nullableString);
    private _subtitle;
    /**
    * The subtitle of the data source, if not null will be displayed to users instead of connection information like host and database name.
    */
    get subtitle(): nullableString;
    set subtitle(value: nullableString);
    get defaultRefreshRate(): number | null;
    /**
    * Default value to use for "Refresh Data" setting for visualizations created using this item, expressed in minutes (e.g. 1440 = 1 day).
    * A value of N means that whenever the visualization requests data, the engine will return data found in the cache if it's not older than N minutes -this means, if the engine fetched it from the datasource no more than N minutes before-. Set it to override the widget editor default behavior.
    */
    set defaultRefreshRate(v: number | null);
    /** @hidden */
    constructor(json?: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    abstract getProviderKey(): string;
    /** @hidden */
    abstract getType(): string;
    /** @hidden */
    _createWrapperInstance(): any;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * @enum
 */
enum RVProviderType {
    AzureSqlServer = 0,
    AzureSynapse = 1,
    GoogleAnalytics4 = 2,
    GoogleBigQuery = 3,
    MicrosoftSqlServer = 4,
    MySql = 5,
    Oracle = 6,
    Postgres = 7,
    Sybase = 8,
    WebResource = 9,
    Rest = 10,
    S3 = 11,
    GoogleDrive = 12,
    GoogleSearchConsole = 13,
    OneDrive = 14,
    Dropbox = 15,
    Box = 16,
    MicrosoftDynamics = 17,
    MicrosoftAnalysisServices = 18,
    MicrosoftReportingServices = 19,
    AmazonRedshift = 20
}
//# sourceMappingURL=rvProviderType.d.ts.map

/**
 * The class used as the argument to the dashboardSelectorRequested event.
 */
class DashboardSelectorRequestedEventArgs {
    callback: (dashboardId: string) => void | null;
    /** @ignore */
    constructor(callback: (dashboardId: string) => void);
}

/**
 * The basic class for data source items that can be used by visualizations to get data.
 * When getting data from a database for example, the data source object contains the information required to connect
 * to the database (like server host and database name) and the data source item contains
 * the information required to get the dataset itself (like table name or view name).
 */
abstract class RVDataSourceItem implements IKnownType {
    private _defaultRefreshRate;
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVDashboardDataSource);
    /** @hidden */
    static dataSourceFactory: (json: any) => RVDashboardDataSource;
    /** @hidden */
    static dataSourceItemFactory: (json: any) => RVDataSourceItem;
    /** @hidden */
    toJson(): any;
    private _title;
    /** The title of the item, as displayed to the user, it might be for example the name of the table in a database. */
    get title(): nullableString;
    set title(value: nullableString);
    private _subtitle;
    /** The subtitle of the data source, if not null will be displayed to users instead of connection information like host and database name. */
    get subtitle(): nullableString;
    set subtitle(value: nullableString);
    private _id;
    /** The value that identifies this item in the data source, it might be for example the name of the schema concatenated with the table name. */
    get id(): nullableString;
    set id(value: nullableString);
    private _description;
    /** Description of this data source item. */
    get description(): nullableString;
    set description(value: nullableString);
    private _dataSource;
    /**
     * Reference to the data source object this item belongs to.
     */
    get dataSource(): RVDashboardDataSource;
    set dataSource(value: RVDashboardDataSource);
    /**
     * Default value to use for "Refresh Data" setting for visualizations created using this item, expressed in minutes (e.g. 1440 = 1 day).
     * A value of N means that whenever the visualization requests data, the engine will return data found in the cache if it's not older than N minutes -this means, if the engine fetched it from the datasource no more than N minutes before-. If not set it will use the default value set in the data source object.
     */
    set defaultRefreshRate(v: number | null);
    get defaultRefreshRate(): number | null;
    /** @hidden */
    abstract getType(): string;
    /** @hidden */
    _createWrapperInstance(isResourceBased?: Boolean): any;
    /** @hidden */
    _getWrapper(isResourceBased?: Boolean): any;
}

/**
 * Object indicating what was selected by the end user, it could be a data source (like a database) or a data source item (like a table in a database).
 */
class RVDataSourceSelection {
    /** @ignore */
    private _dataSource;
    /** @ignore */
    private _dataSourceItem;
    /** @ignore */
    private constructor();
    /**
     * Creates a selection object for a data source.
     * @param ds the selected data source.
     * @returns A new selection object with a data source selected.
     */
    static withDataSource(ds: RVDashboardDataSource): RVDataSourceSelection;
    /**
     * Creates a selection object with a data source item.
     * @param dsItem the selected data source item.
     * @returns A new selection object with a data source item selected.
     */
    static withDataSourceItem(dsItem: RVDataSourceItem): RVDataSourceSelection;
    /**
     * The selected data source or null if a data source item is selected.
     */
    get dataSource(): RVDashboardDataSource | null;
    /**
     * The selected data source item or null if a data source is selected.
     */
    get dataSourceItem(): RVDataSourceItem | null;
}
//# sourceMappingURL=rvDataSourceSelection.d.ts.map

/**
 * The class used as the argument to the onDataSourceSelection event with the trigger and list of data sources in use in the dashboard.
 */
class DataSourceSelectionEventArgs {
    /**
     * Set this to true to cancel the display of the standard UI for selecting data sources
     */
    cancel: boolean;
    private _callback;
    private _dataSources;
    private _trigger;
    constructor(callback: (selection: RVDataSourceSelection) => void, dataSources: any, trigger: RVDataSourcesRequestedTriggerType);
    /**
     * Event that originated the data sources selection, one of visualization, dashboard filter or data blending.
     */
    get trigger(): RVDataSourcesRequestedTriggerType;
    /**
     * List of data sources returned by onDataSourcesRequested.
     */
    get dataSources(): any;
    /**
     * The callback to use when the selection is ready. Receives a RVDataSourceSelection object created using the
     * helper methods RVDataSourceSelection.withDataSource or RVDataSourceSelection.withDataSourceItem.
     */
    get callback(): (selection: RVDataSourceSelection) => void;
}
//# sourceMappingURL=dataSourceSelectionEventArgs.d.ts.map

class RevealDataSources {
    _dataSources: RVDashboardDataSource[];
    _dataSourceItems: RVDataSourceItem[];
    _useDataInDashboard: boolean;
    _filter: ((item: any) => Boolean) | null;
    constructor(dataSources: RVDashboardDataSource[], dataSourceItems: RVDataSourceItem[], useDataInDashboard: boolean);
    get dataSourceItems(): RVDataSourceItem[];
    get dataSources(): RVDashboardDataSource[];
    get useDataInDashboard(): boolean;
    get filter(): ((item: any) => Boolean) | null;
    set filter(f: ((item: any) => Boolean) | null);
    getInternal(): any;
    /** @hidden */
    private _transformToInternal;
}

/**
    * Represents a personalized configuration for a specific Chart type
    */

class RVChartTypeItem implements IRVChartTypeItem {
    _int: any;
    _chartType: RVChartType;
    /** @ignore */
    constructor(chartType: RVChartType, title: string | null, icon: string | null, groups: string[] | null);
    get revealElement(): object;
    /**
     * The title for the Chart type
     *  This will be displayed in the visualization selector
     */
    get title(): string;
    /**
     * The title for the Chart type
     *  This will be displayed in the visualization selector
     */
    set title(value: string);
    /**
     * Image to represent as a icon for the visualization
     */
    get icon(): string;
    /**
     * Image to represent as a icon for the visualization
     */
    set icon(value: string);
    /**
     * Groups were the Chart Type should be displayed when selecting visualization
     */
    get groups(): string[];
    /**
     * Groups were the Chart Type should be displayed when selecting visualization
     */
    set groups(value: string[]);
    /**
     *  Indicates the type of chart for the current configuration
     */
    get chartType(): RVChartType;
    /**
     * Indicates the type of chart for the current configuration
     */
    set chartType(value: RVChartType);
}
interface IRVChartTypeItem {
    revealElement: object;
    title: string;
    icon: string;
    groups: string[];
    chartType: string;
}

/**
 * Class representing the event arguments for the onEditModeEntered event
 * @see {@link RevealView.onEditModeEntered}
 */
class EditModeEnteredArgs {
    /**
     * Dashboard being edited.
     */
    dashboard: RVDashboard;
    /** @ignore */
    constructor(dashboard: RVDashboard);
}
//# sourceMappingURL=editModeEnteredArgs.d.ts.map

/**
 * Class representing the event arguments for the onEditModeExited event
 * @see {@link RevealView.onEditModeExited}
 */
class EditModeExitedArgs {
    /**
     * Dashboard that was being edited.
     */
    dashboard: RVDashboard;
    /** @ignore */
    constructor(dashboard: RVDashboard);
}
//# sourceMappingURL=editModeExitedArgs.d.ts.map

/**
 * The class used as the argument to the onTooltipShowing event.
 */
class UrlLinkRequestedArgs {
    /**
     *  This contains the value defined in the dashboard.
     */
    url: string;
    /**
     *  Tells the browser where to open the link.
     */
    target: string;
    /**
     *   The visualization for which the url is requested.
     */
    visualization: RVVisualization;
    /**
     * The cell from where the url is requested.
     */
    cell: RVCell;
    /**
     * The whole data row for which the url is requested.
     */
    row: RVCell[];
    /** @ignore */
    constructor(url: string, target: string, visualization: RVVisualization, cell: RVCell, cells: RVCell[]);
}
//# sourceMappingURL=urlLinkRequestedArgs.d.ts.map

/**
 * Argument object passed to `RevealView.onDashboardChanged` event.
 */
class DashboardChangedEventArgs {
    /**
     * Gets the dashboard that is being replaced.
     * @type {RVDashboard | null}
     */
    oldValue: RVDashboard | null;
    /**
     * Gets the new dashboard that is replacing the old one.
     * @type {RVDashboard | null}
     */
    newValue: RVDashboard | null;
    /**
     * Initializes a new instance of the `DashboardChangedEventArgs` class.
     * @param {RVDashboard | null} oldValue - The dashboard that is being replaced.
     * @param {RVDashboard | null} newValue - The new dashboard that is replacing the old one.
     */
    constructor(oldValue: RVDashboard | null, newValue: RVDashboard | null);
}
//# sourceMappingURL=DashboardChangedEventArgs.d.ts.map

abstract class RVDateFilterMenuItem {
}
class RVDateFilterMenuOption implements RVDateFilterMenuItem {
    /** @ignore */
    _filterOption: any;
    get rule(): RVDateRule | null;
    get range(): RVDateRange | null;
    get title(): string;
    /** @ignore */
    constructor(option: any);
    constructor(range: RVDateRange, title?: string);
    constructor(rule: RVDateRule, title?: string);
    toString(): string;
}
class RVDateFilterMenuSeparator implements RVDateFilterMenuItem {
    toString(): string;
}
//# sourceMappingURL=rvDateFilterMenuOption.d.ts.map

class DateFilterMenuOpeningEventArgs {
    cancel: boolean;
    readonly items: RVDateFilterMenuItem[];
    constructor(items: RVDateFilterMenuItem[]);
}
//# sourceMappingURL=dateFilterMenuOpeningEventArgs.d.ts.map

/**
 * Used to create a new instance of the RevealView class.
 * The main class used to render a dashboard in your application, it also allows the editing of existing dashboards or the creation from scratch.
 */
class RevealView {
    private static _currentTheme;
    /** @internal */
    _navigationMgr: any;
    /** @internal */
    _dashboardView: any;
    /** @internal */
    _dashboardModel: any;
    /** @internal */
    _contextId: string;
    private _selector;
    private _dashboard;
    private _appInstanceId;
    private _applyingParameters;
    private _sdkDelegate;
    private _isPreviewDataInVisualizationEditorEnabled;
    private _canEdit;
    private _showSave;
    private _showCancel;
    private _startInEditMode;
    private _canAddVisualization;
    private _canMaximizeVisualization;
    private _showMenu;
    private _showFilters;
    private _showVisualizationFilters;
    private _singleVisualizationMode;
    private _showBreadcrumb;
    private _showBreadcrumbDashboardTitle;
    private _showToolbar;
    private _canSaveAs;
    private _showRefresh;
    private _showHeader;
    private _showChangeVisualization;
    private _showStatisticalFunctions;
    private _showExportImage;
    private _showExportToExcel;
    private _showExportToPDF;
    private _showExportToPowerPoint;
    private _showExportToCsv;
    private _startWithNewVisualization;
    private _serverSideSave;
    private _showChangeDataSource;
    private _showMachineLearningModelsIntegration;
    private _showDataBlending;
    private _showDataSourceSelectionDialogSearch;
    private _crosshairsEnabled;
    private _interactiveFilteringEnabled;
    private _showDescription;
    private _showTitle;
    private _showDateFilterMenu;
    private _hoverTooltipsEnabled;
    private _canAddCalculatedFields;
    private _canAddDashboardFilter;
    private _canAddDateFilter;
    private _canAddPostCalculatedFields;
    private _canCopyVisualization;
    private _canDuplicateVisualization;
    private _chartTypes;
    private _addDataSourceEnabledProviders;
    private _showEditDataSource;
    private _canChangeVisualizationBackgroundColor;
    private _canAddDataSources;
    private _exportMode;
    private _assets;
    private _currentObserver;
    private _themeChangedListener;
    /**
     * Instantiates a new RevealView component and renders it at the provided DOM selector location.
     * @param selector Selector to the DOM element where the RevealView should be rendered. Exception is thrown if no element is found in DOM matching the selector.
     */
    constructor(selector: string);
    private debounce;
    private resizeHandler;
    private _presentRevealView;
    private _dashboardLoaded;
    private _restoreDashboardViewConfiguration;
    private _setDashModel;
    private _applyRevealViewParameters;
    private _updateGlobalFiltersValues;
    private _addListeners;
    private _updateGlobalFilterSelectedValues;
    getLinkedDashboardProviderAsync(): ((dashboardId: string, linkTitle: string | null) => Promise<RVDashboard>) | null;
    updateQuickFilterSelectedValues(widget: any, fieldName: string, selectedValues: Array<RVFilterValue>): void;
    private _requiresFilterAvailableValues;
    /** @internal */
    _loadDashboard(): void;
    /** @internal */
    _dashboardViewSaveDashboard(dashboardView: any, dashboard: any, saveAs: Boolean): void;
    private _prepareDatePointClickedAndTooltipShowingEventargs;
    /**
     * Sets the selected values for the given global filter
     *
     * @param {RVDashboardFilter} filter The filter to set the selection to. It might be obtained from dashboard.filters()[index] or dashboard.getFilterByTitle(title)
     * @param {object[]} selectedValues The array of selected values containing the new selection for the filter, like ['United States', 'France'].
     * @see RVDashboard#filters
     * @see RVDashboard#getFilterByTitle
     * @internal
     */
    _setGlobalFilterSelectedValues(filter: RVDashboardFilter, selectedValues: Array<object>): void;
    /**
     * Sets the selected values for the given quick filter
     *
     * @param {RVVisualizationFilter} filter The filter to set the selection to.
     * @param {Array<RVFilterValue>} selectedValues The array of selected values containing the new selection for the filter, like ['United States', 'France'].
     * @see RVDashboard#filters
     * @see RVDashboard#getFilterByTitle
     * @internal
     */
    _setQuickFilterSelectedValues(filter: RVVisualizationFilter, selectedValues: Array<RVFilterValue>): void;
    /** @internal */
    _setDateFilter(dateFilter: RVDateDashboardFilter): void;
    /** @internal */
    _sendServerSideSaveRequest(name: string, dashboardId: string | null): void;
    /** @internal */
    _dashboardSaveFinished(name: string, dashboardId: string | null): void;
    /** @internal */
    _getEnabledProvidersToAdd(): string[];
    /** @internal */
    _getMissingCredentialsBlock(): any;
    /** @internal */
    _onMissingCredentials(ds: any, callback: (success: boolean) => void): boolean;
    /** @internal */
    _onVisualizationSeriesColorAssigning(widget: any, defaultColor: string, fieldName: string | null, categoryName: string | null): string;
    /** @internal */
    _onMenuOpening(widget: any, args: MenuOpeningEventArgs): Array<object>;
    /** @internal */
    _showDashboardSelector(cell: any, callback: any): void;
    /** @internal */
    _isDashboardLinkingEditorEnabled(): boolean;
    private _setChartTypes;
    /** @internal */
    _dataReceived(): void;
    /** @internal */
    _onFieldsInitializing(args: FieldsInitializingEventArgs): void;
    /** @internal */
    _onEditModeEntered(args: EditModeEnteredArgs): void;
    /** @internal */
    _onEditModeExited(args: EditModeExitedArgs): void;
    /**
     * Only works if set before the dashboard is loaded.
     * @internal
     * */
    get exportMode(): boolean;
    set exportMode(v: boolean);
    /**
     * Enables adding new data sources.
     * @ignore
     */
    get canAddDataSources(): boolean;
    /**
     * @ignore
     */
    set canAddDataSources(v: boolean);
    /**
     * Event triggered when the dashboard property is set to a new instance of an RVDashboard.
     * The event handler receives one argument:
     * - `args`: An instance of `DashboardChangedEventArgs` which contains the old and new dashboards.
     *
     * Remarks:
     * If the dashboard property is set to null, a new dashboard is created automatically with a title "New Dashboard".
     *
     * Example usage:
     * ```typescript
     * revealView.onDashboardChanged = function (args: DashboardChangedEventArgs) {
     *   console.log('Dashboard has changed.');
     *   console.log('Old Dashboard:', args.oldValue);
     *   console.log('New Dashboard:', args.newValue);
     * };
     * ```
     **/
    onDashboardChanged: ((args: DashboardChangedEventArgs) => void) | null;
    /**
     * This event is triggered when the end user clicks 'Save' or 'Save As'. However, if this event is set in RevealView then the callback server side
     * (SaveDashboardAsync) will not be called, and the application will handle how the dashboard is saved,
     * for example by implementing its own controller server side.
     *
     * ```javascript
     * revealView.onSave = function (rv, saveEvent) {
     *    if (saveEvent.saveAs) {
     *        var newName = prompt("Save as", dashboardId);
     *	      if (!newName) return;
     *            saveEvent.serializeWithNewName(newName,
     *                function (b) {
     *                    saveDashboard(newName, b, saveEvent);
     *            });
     *        } else {
     *            saveEvent.serialize(
     *                function (b) {
     *                    saveDashboard(dashboardId, b, saveEvent);
     *                });
     *        }
     * };
     * ```
     */
    onSave: ((rv: RevealView, saveEvent: DashboardSaveEventArgs) => void) | null;
    /**
     * This event is triggered when the end user maximizes or minimizes a visualization.
     * If the action is maximizing, the visualization the title of the maximized visualization can be retrieved via the maximizedVisualization
     * property of the revealView object.
     *
     * ```javascript
     * revealView.onMaximizedVisualizationChanged = function () {
     *     maximizedVisualization = revealView.maximizedVisualization;
     *     msg = "";
     *     if (maximizedVisualization != null) {
     *         msg = maximizedVisualization.title;
     *     } else {
     *          msg = "no current maximized visualization";
     *     }
     *     console.log("Maximized visualization changed! " + msg);
     * };
     * ```
     */
    onMaximizedVisualizationChanged: (() => void) | null;
    /**
     * This event is triggered whenever the end user clicks on a data point over a maximized visualization and not in edit mode.
     *
     * ```javascript
     * revealView.onVisualizationDataPointClicked = function (visualization, cell, row) {
     *   console.log("Visualization Data Point Clicked");
     *   console.log(visualization.title);
     *   console.log(cell.columnLabel);
     *   console.log(cell.value);
     *   console.log(cell.formattedValue);
     *   console.log("First cell in the row has label:" + row[0].columnLabel)
     *}
     *```
     */
    onVisualizationDataPointClicked: ((visualization: RVVisualization, cell: RVCell, row: RVCell[]) => void) | null;
    /**
    * This event is triggered when the chart visualization loads and is in the process of creating each series. With this event you can customize the color used for the series.
    *
    * ```javascript
    * revealView.onVisualizationSeriesColorAssigning = function (visualization, defaultColor, fieldName, categoryName) {
    *   console.log("Visualization is creating a series");
    *   console.log(visualization.title);
    *   console.log(fieldName);
    *   console.log(categoryName);
    *   return defaultColor;
    *}
    *```
    */
    onVisualizationSeriesColorAssigning: ((visualization: RVVisualization, defaultColor: string, fieldName: string | null, categoryName: string | null) => string) | null;
    /**
    * This event is triggered when the overflow is clicked on the dashboard or visualization to expose the menu. Using this event, you can customize what is shown in that menu.
    *
    * ```javascript
    * revealView.onMenuOpening = function (visualization, args) {
    *   for (var i = 0; i < args.menuItems.length; i++)
    *   {
    *     if (i == 2)
    *     {
    *       args.menuItems[i].isHidden = true;
    *     }
    *     if (args.menuItems[i].title === "Edit")
    *     {
    *       args.menuItems[i].title = "Edit Mode";
    *     }
    *   }
    *
    *   var icon = new $.ig.RVImage("https://svgsilh.com/png-512/1088490.png", "Icon");
    *   args.menuItems.push(new $.ig.RVMenuItem("Cool Menu Item", icon, () => { alert('Example'); }));
    *}
    *```
    */
    onMenuOpening: ((visualization: RVVisualization | null, args: MenuOpeningEventArgs) => void) | null;
    /**
     * This event is triggered whenever the end user clicks on the 'Add visualization' button.
     * You can create custom datasources to replace the default/existing ones.
     * The argument is a callback function you're supposed to call and pass your custom collection of datasources which the end user will see.
     *
     * ```javascript
     * revealView.onDataSourcesRequested = function (callback, trigger) {
     *     if(trigger == RVDataSourcesRequestedTriggerType.Visualization){
     *         var inMemoryDSI = new RVInMemoryDataSourceItem("employees");
     *         inMemoryDSI.title = "My InMemory Title";
     *         inMemoryDSI.description ="My InMemory Description";
     *
     *         var sqlDs = new RVSqlServerDataSource();
     *         sqlDs.title = "Clients";
     *         sqlDs.id = "SqlDataSource1";
     *         sqlDs.host = "db.mycompany.local";
     *         sqlDs.port = 1433;
     *         sqlDs.database = "Invoices";
     *
     *         callback(new $.ig.RevealDataSources([sqlDs], [inMemoryDSI], true));
     *     }
     * };
     * ```
     */
    onDataSourcesRequested: ((callback: (datasources: RevealDataSources) => void, trigger: RVDataSourcesRequestedTriggerType) => void) | null;
    /**
     * Event called when the list of data sources is about to be displayed, this is the way to show your own UI for the list
     * of data sources instead of the default UI.
     * If this handler is not installed Reveal will use the default dialog for selecting a data source.
     */
    onDataSourceSelectionDialogShowing: ((args: DataSourceSelectionEventArgs) => void) | null;
    _showCustomDataSourceSelection(trigger: RVDataSourcesRequestedTriggerType, revealDataSources: any, dsItemSelected: (dsiInfo: any) => void): boolean;
    /**
       * This event is triggered when Reveal is requesting credentials for a given data source.
       * This is optional, as you can specify server side credentials for all your data sources, but if you don't
       * know in advance credentials your users should use (for example if you want your users to enter their own credentials to the database)
       * you can use this approach.
       * Please note how credentials are requested and stored is something you need to do in your application, this
       * event indicates credentials are needed, once the user entered credentials (or cancelled the flow) you
       * must call the callback function received as a parameter, the function receives a boolean parameter
       * that indicates if Reveal should try again (true) or the prompt was cancelled (false).
       * @type {$.ig.RevealView~onConfigureCredentials}
       *
       * ```javascript
       * revealView.onConfigureCredentials = function (ds, callback) {
       *     //TODO: prompt for credentials, store them in your server and call the callback function when ready
       * };
       * ```
       */
    onConfigureCredentials: ((dataSource: RVDashboardDataSource, callback: (success: boolean) => void) => void) | null;
    /**
    * Event fired when the user hover over a visualization and a tooltip is about to show up.
     * ```javascript
     * revealView.onTooltipShowing = function (args) {
     *{
     *    var vizTitle = args.Visualization.Title;
     *    if(vizTitle == "noNeedForTooltipsHere")
     *    {
     *        args.Cancel = true;
     *    }
     *}
     *```
     */
    onTooltipShowing: ((args: TooltipShowingEventArgs) => void) | null;
    /**
     * This event is triggered whenever the end user clicks the 'Export Image' button in the 'Export Image' popup after annotating the screenshot (optional).
     *
     * **Note**: This feature relies on server-side image rendering, so you will need to enable in your .NET Core or Java Reveal server component.
     * ```javascript
     * revealView.onImageExported = function (img) {
     *   console.log(img);
     * };
     * ```
     */
    onImageExported: ((image: Element) => void) | null;
    /**
     * This event is triggered whenever the end user is trying to open the editor for a visualization.
     * Using the args parameter you could check if this is a brand new visualization or the user is trying to edit an existing one.
     * You could also cancel the process of entering the editor by setting args.cancel to true.
     *```javascript
     *   revealView.onVisualizationEditorOpening = function (args) {
     *     if(args.isNewVisualization == false){
     *       //the user is trying to edit an existing visualization
     *       args.cancel = true; //prevent it
     *     }
     * };
     * ```
     */
    onVisualizationEditorOpening: ((args: VisualizationEditorOpeningArgs) => void) | null;
    /**
    * Event triggered when the visualization editor is opened.
    * Using the args parameter you could check if this is a brand new visualization or the user is editing an existing one.
    * ```javascript
    * revealView.onVisualizationEditorOpened = function (args) {
    *     if(args.isNewVisualization == false) { //the user is editing an existing visualization
    *     }
    * };
    * ```
    */
    onVisualizationEditorOpened: ((args: VisualizationEditorOpenedEventArgs) => void) | null;
    /**
    * This event is triggered when the end user clicks on cancel("x") button upon editing/creating a visualization.
    * Using the args parameter you could check if this is a brand new visualization or the user is editing an existing one.
    * You could also cancel the process of exiting edit mode by setting args.cancel to true.
    * ``` javascript
    * revealView.onVisualizationEditorClosing = function (args) {
    *     if(args.isNewVisualization == false){ //the user is editing
    *          args.resetVisualization = true; //puts the widget to the state when it was when the user started editing it
    *     }
    * };
    * ```
    */
    onVisualizationEditorClosing: ((args: VisualizationEditorClosingArgs) => void) | null;
    /**
     * Event triggered when the visualization editor is closed.
     * Using the args parameter you could check if this is a brand new visualization or the user edited an existing one.
     * The isCancelled flag can be used to determine whether the changes were applied or discarded. The isCancelled is true when the later is true.
     * ```javascript
     * revealView.onVisualizationEditorClosed = function (args) {
     *     if(args.isNewVisualization == false) {
     *     }
     * };
     * ```
     */
    onVisualizationEditorClosed: ((args: VisualizationEditorClosedEventArgs) => void) | null;
    /**
    * This event triggered when a visualization is about to request data, the event can be canceled if showing data
    * for the visualization is not allowed.
    * Using the args parameter you could cancel the data request by setting args.cancel to true and set the
    * message to be displayed to the end user by setting cancel.errorMessage.
    * See {@link VisualizationDataLoadingEventArgs}.
    *
    * **JavaScript**:
    * ```javascript
    * revealView.onVisualizationDataLoading = function (args) {
    *     if(!hasAccess(args.visualization)){
    *          args.cancel = true;
    *          args.errorMessage = "You don't have access to this data";
    *     }
    * };
    * ```
    *
    * **TypeScript**:
    *```typescript
    *     revealView.onVisualizationDataLoading = (args:RevealApi.VisualizationDataLoadingEventArgs) =>
    *     {
    *          if(!hasAccess(args.visualization)){
    *               args.cancel = true;
    *               args.errorMessage = "You don't have access to this data";
    *      }
    *  }
    *```
    */
    onVisualizationDataLoading: ((args: VisualizationDataLoadingEventArgs) => void) | null;
    onDashboardSelectorRequested: ((args: DashboardSelectorRequestedEventArgs) => void) | null;
    /**
     * Will be called when a linked dashboard is needed either if the user tries to follow a dashboard link
     * or tries to create a dashboard link while editing.
     *
     * **Note**: This callback is expected to return a Promise of an {@link RVDashboard}.
     * ```javascript
     * revealView.onLinkedDashboardProviderAsync = function (dashboardId, linkTitle) {
     *     return $.ig.RVDashboard.loadDashboardAsync(dashboardId);
     * };
     * ```
    */
    onLinkedDashboardProviderAsync: ((dashboardId: string, linkTitle: string | null) => Promise<RVDashboard>) | null;
    /**
    * Will be called when a url is needed if the user tries to follow a dashboard link.
    * If this method is not provided, the link defined in the dashboard will be used.
    * **Note**: This callback is expected to return the modified url.
    * ```javascript
    * revealView.onUrlLinkRequested = function (args) {
    *     return args.url + "&modfiedUrl=true";
    * };
    * ```
   */
    onUrlLinkRequested: ((args: UrlLinkRequestedArgs) => string) | null;
    /**
    * This event is triggered when entering the visualization editor after selecting your data source.
    * With this event you can customize the list of fields shown in the editor by removing, renaming, or reordering fields.
    *
    * ```javascript
    * revealView.onFieldsInitializing = function (args) {
    *    var editedFields = args.fields;
    *    // a example of how you can delete fields
    *    // list of field names to be deleted
    *    var exclude = ["Date", "Budget", "CTR", "Avg.CPC", "Avg. CPC", "Traffic"];
    *    // deleted the fields
    *    editedFields = editedFields.filter(f => !exclude.some(e => e == f.name));
    *    //change name to show to Spend field to Spent
    *    var fieldToChange = editedFields.find(f => f.name == "Spend");
    *    if (fieldToChange) { fieldToChange.label = "Spent"; }
    *    //change order
    *    args.useCustomSort = true; //when set to true the fields are displayed in the same order   as in args.fields
    *    // if you want to re order only the first two positions
    *    var newOrder = ["Organic %", "Spend"]; // change the order for the first two position,
    *
    *    //for this example spend will be in the first position and Organic in the second position,
    *    //the rest of the fields will be kept in the order they had in args fields
    *    newOrder.forEach(function (field) {
    *      var moveFiled = editedFields.find(function (f) {
    *        return f.name === field;
    *      });
    *      if (editedFields.indexOf(moveFiled) !== -1) {
    *        editedFields.splice(editedFields.indexOf(moveFiled), 1);
    *        editedFields.unshift(moveFiled);
    *      }
    *    });
    *    args.fields = editedFields
    * }
    * ```
    */
    onFieldsInitializing: ((args: FieldsInitializingEventArgs) => void) | null;
    onEditModeEntered: ((args: EditModeEnteredArgs) => void) | null;
    onEditModeExited: ((args: EditModeExitedArgs) => void) | null;
    /**
     * @hidden
     */
    onDataReceived: (() => void) | null;
    dashboardFiltersUpdated(filters: any): void;
    /**
     * @hidden
     */
    prepareForCapture(callback: (revealView: RevealView) => void): void;
    enterEditMode(): void;
    exitEditMode(applyChanges: boolean): boolean;
    /** This method calls {@link RevealUtility.loadDashboardFromContainer} that loads a dashboard from the Blob object with the contents of an .rdash file. */
    static revealViewForDashboardBlob(b: Blob, selector: string): Promise<RevealView>;
    static revealViewForDashboardBlob(b: Blob, selector: string, successCallback: (revealView: RevealView) => void, errorCallback: any): void;
    /**
   * @hidden
   */
    static _getOffsets(container: HTMLElement): {
        offsetTop: number;
        offsetLeft: number;
        offsetWidth: number;
        offsetHeight: number;
    };
    /** This method is used to indicate the size of the container has changed and RevealView must re-layout its contents. */
    updateSize(): void;
    /**
     * Used to maximize a visualization once the Reveal View was initialized and rendered. It might be used to sync the currently displayed visualization with
     * a feature in the containing app, like displaying 'Sales by Country' along a Sales report.
     * @param {RVVisualization} visualization the visualization to be maximized, an object obtained from the dashboard with methods like
     * visualizations()[index] or getVisualizationByTitle(title).
     *
     * You could find the visualization you want to maximize using getById or getByTitle methods like:
     *
     * ```javascript
     * let viz = dashboard.visualizations.getByTitle("MyVizTitle")
     * let viz = dashboard.visualizations.getById("TargetVizId")
     * ```
     *
     * @returns {boolean} true if the given visualization was found in the dashboard and maximized properly, false otherwise.
     * @see {@link RVDashboard.visualizations}
     */
    maximizeVisualization(visualization: RVVisualization): boolean;
    /**
     * Used to restore the currently maximized visualization to the original state, so the whole dashboard is visible.
     * @returns {boolean} true if there was a maximized visualization, which was minimized, false otherwise.
     * */
    minimizeVisualization(): boolean;
    /**
     * Sets the date filter in the current dashboard. Please note the dashboard must already have a date filter defined, otherwise this method will be ignored.
     * @param {RVDateDashboardFilter} filter the new date filter to set in the dashboard model.
     * @see {@link RVDashboard.dateFilter}
     */
    setDateFilter(filter: RVDateDashboardFilter): void;
    /**
     * Method used to programmatically refresh the dashboard data, equivalent to execute the 'Refresh' action in the dashboard menu.
     */
    refreshDashboardData(): void;
    /**
    * Makes sure the current theme specified in {@link RevealSdkSettings.theme} is applied.
    * This involves re-loading of the currently displayed dashboard, so any state like pending edits, maximized visualization, filters selection changes will be reset and lost.
    */
    refreshTheme(): void;
    /**
     * Creates a screenshot of the revealView.
     *
     * **Note**: This feature relies on server-side image rendering so you will need to enable in your .NET Core or Java Reveal server component.
     * @param {gotImageCallback} gotImageCallback - A callback that will be invoked when the image is ready. The image will be passed as a param to the callback.
     * ```javascript
     * revealView.toImage(function (img) {
     *     img.removeAttribute("style");
     *     body.innerHTML = "";
     *     body.appendChild(img);
     * });
     * ```
     */
    toImage(): Promise<Element | null>;
    toImage(gotImageCallback: (el: Element | null) => void): void;
    /** Serializes the current dashboard to a byte array */
    serialize(): Promise<Uint8Array>;
    serialize(name: string): Promise<Uint8Array>;
    serialize(callback: (data: Uint8Array) => void, errorCallback: (error: any) => void): void;
    /** @deprecated Serializes the current dashboard in an '.rdash' format to a byte array, the title of the dashboard is changed to match the specified name.
    *
    * Please use the serialize method, as this method will be removed in a future release.
    */
    serializeWithNewName(name: string): Promise<Uint8Array>;
    serializeWithNewName(name: string, callback: (data: Uint8Array) => void, errorCallback: (error: any) => void): void;
    /**
     * Overrides built in Reveal Theme settings. This method will not affect RevealView instances already rendered.
     * @deprecated This method is deprecated. Use {@link RevealSdkSettings.theme} property to get/set current theme.
     * @param {RevealTheme} theme object containing theme settings to override {@link RevealSdkSettings.theme}
     */
    static updateRevealTheme(theme: RevealTheme): void;
    /** @internal */
    static _convertColors(colors: string[]): string[];
    /**
     * Returns the currently applied theme.
     * @deprecated This method is deprecated. Use {@link RevealSdkSettings.theme} property to get/set current theme.
     */
    static getCurrentTheme: () => RevealTheme;
    /**
     * Set the chart settings
     */
    setVisualizationChartSettings(visualization: RVVisualization, chartSettings: RVChartSettings): void;
    /**
     * Set the background color for the given visualization, color is specified in hex format, like "#ffffff".
     */
    setVisualizationBackgroundColor(visualization: RVVisualization, color: string): void;
    /**
     * @returns {RVVisualization} the maximized visualization object if any, null if no visualization is maximized
     * */
    get maximizedVisualization(): RVVisualization | null;
    set maximizedVisualization(viz: RVVisualization | null);
    /**
     * Get/set the dashboard that is/should be rendered.
     */
    get dashboard(): RVDashboard | null;
    set dashboard(dashboard: RVDashboard | null);
    private setDashboard;
    /**
     * A flag indicating if the save button should be displayed or not.
     * @default true
     */
    get showSave(): Boolean;
    set showSave(showSave: Boolean);
    /**
     * A flag indicating if the cancel button should be displayed or not.
     * @default true
     */
    get showCancel(): Boolean;
    set showCancel(showCancel: Boolean);
    /**
     * A flag indicating if the user can switch to edit mode or not.
     * @default true
     */
    get canEdit(): Boolean;
    set canEdit(canEdit: Boolean);
    /**
     * A flag indicating the view should start in edit mode instead of the default view mode.
     * @default false
     */
    get startInEditMode(): Boolean;
    set startInEditMode(startInEditMode: Boolean);
    /**
     * A flag that indicates if new visualizations can be added when the dashboard is edited.
     * @default true
     */
    get canAddVisualization(): Boolean;
    set canAddVisualization(canAddVisualization: Boolean);
    /**
     * A flag that indicates if the maximize visualization would be visible and the user would be able to maximize visualizations.
     * @default true
     */
    get canMaximizeVisualization(): Boolean;
    set canMaximizeVisualization(v: Boolean);
    /**
     * A flag indicating if new (calculated) fields can be added to the list of fields.
     * @default true
     */
    get canAddCalculatedFields(): Boolean;
    set canAddCalculatedFields(v: Boolean);
    /**
     * A flag indicating if the f(x) option in numeric values sections (like "Values") should be displayed or not.
     * @default true
     */
    get canAddPostCalculatedFields(): Boolean;
    set canAddPostCalculatedFields(v: Boolean);
    /**
     * A flag that indicates if the end user will be allowed to create dashboard filters.
     * @default true
     */
    get canAddDashboardFilter(): Boolean;
    set canAddDashboardFilter(v: Boolean);
    /**
     * A flag that indicates if the end user will be allowed to create date filter.
     * @default true
     */
    get canAddDateFilter(): Boolean;
    set canAddDateFilter(v: Boolean);
    /**
     * A flag that indicates if the "Copy" option is available in the menu for a visualization.
     * @default true
     */
    get canCopyVisualization(): Boolean;
    set canCopyVisualization(v: Boolean);
    /**
     * A flag that indicates if the "Duplicate" option is available in the menu for a visualization.
     * @default true
     */
    get canDuplicateVisualization(): Boolean;
    set canDuplicateVisualization(v: Boolean);
    /**
     * A flag indicating if the end-user can change the background color for a given visualization in the visualization editor (under Settings tab),
     * if enabled the list of colors specified via {@link RevealTheme.backgroundColors} will be displayed as a suggested palette, but the user can also
     * use an advanced mode to select any color. In the future, this property will be removed and the background color setting will be automatically visible
     * in the visualization editor settings.
     * @default true
     * @deprecated
     */
    get canChangeVisualizationBackgroundColor(): boolean;
    set canChangeVisualizationBackgroundColor(v: boolean);
    /**
     * A flag that allows the dashboard filters panel to be hidden. This is useful if you want to limit the selected
     * values for the filters to the initial selection specified in the dashboard object.
     * Once the RevealView is created and rendered you can use {@link RVDashboard.filters} or {@link RVDashboard.dateFilter} to change
     * the selection for a given filter, so you can keep the selected values synced with your app.
     * @default true
     */
    get showFilters(): Boolean;
    set showFilters(v: Boolean);
    /**
     * A flag that allows the visualization filters panel to be hidden. This is useful if you want to limit the selected
     * values for the filters to the initial selection.
     * Once the RevealView is created and rendered you can use {@link RVVisualizationFilter.filters} to change
     * the selection for a given filter, so you can keep the selected values synced with your app.
     * @default true
     */
    get showVisualizationFilters(): Boolean;
    set showVisualizationFilters(v: Boolean);
    /**
     * Single visualization mode is used to show a single visualization at a time.
     * You can control the initial visualization to maximize using the {@link maximizedVisualization} property.
     * If no initial visualization is configured to be maximized the first one will be maximized initially.
     * You can use {@link maximizedVisualization} to change the maximized one once the dashboard is visible.
     * @default true */
    get singleVisualizationMode(): Boolean;
    set singleVisualizationMode(v: Boolean);
    /**
   * Gets the visibility of the chart toolbar.
   * @returns {Boolean} - Returns true if the toolbar is visible on hover; false otherwise. Default is false.
   */
    get showToolbar(): Boolean;
    /**
     * Sets the visibility of the chart toolbar.
     * @param {Boolean} v - If true, the chart's toolbar will be shown; if false, it will be hidden.
     */
    set showToolbar(v: Boolean);
    /**
     * Gets the visibility status of the drill down breadcrumb.
     * @returns {Boolean} - true if the breadcrumb is visible, false otherwise. Default is true.
     */
    get showBreadcrumb(): Boolean;
    /**
     * Sets the visibility of the drill down breadcrumb.
     * @param {Boolean} v - If true, the breadcrumb will be shown; if false, it will be hidden.
     */
    set showBreadcrumb(v: Boolean);
    /**
     * Gets the visibility status of the dashboard title in the breadcrumb when the visualization is maximized.
     * @returns {Boolean} - true if the dashboard title in the breadcrumb is visible when maximized, false otherwise. Default is false.
     */
    get showBreadcrumbDashboardTitle(): Boolean;
    /**
     * Sets the visibility of the Dashboard title in the breadcrumb when the visualization is maximized.
     * @param {Boolean} v - If true, the Dashboard title in the breadcrumb will be shown when maximized; if false, it will be hidden.
     */
    set showBreadcrumbDashboardTitle(v: Boolean);
    /** A flag indicating if the user can 'Save as' the dashboard.
      *  @default true */
    get canSaveAs(): Boolean;
    set canSaveAs(v: Boolean);
    /** A flag that indicates if the Refresh action should be available or not.
     *  @default true */
    get showRefresh(): Boolean;
    set showRefresh(v: Boolean);
    /** A flag that indicates if dashboard header will be rendered.
     *  Please note that if you hide the header bar UI controls to save, save as, export wont be available for the end user.
     *  @default true */
    get showHeader(): Boolean;
    set showHeader(v: Boolean);
    /** A flag indicating if the button to change visualization should be available or not, this button is used to
     * switch to another visualization type (for example from Bar to Column chart) without entering edit mode.
     *  @default true */
    get showChangeVisualization(): Boolean;
    set showChangeVisualization(v: Boolean);
    /** A flag indicating if the menu to apply statistical functions (forecasting, etc.) is available or not.
     *  @default true */
    get showStatisticalFunctions(): Boolean;
    set showStatisticalFunctions(v: Boolean);
    /** A flag indicating if the export image action is available or not.
     * @default true */
    get showExportImage(): Boolean;
    set showExportImage(v: Boolean);
    /** A flag indicating if the export to Excel action is available or not.
     *  @default true */
    get showExportToExcel(): Boolean;
    set showExportToExcel(v: Boolean);
    /** A flag indicating if the export to PowerPoint action is available or not.
     *  @default true */
    get showExportToPowerPoint(): Boolean;
    set showExportToPowerPoint(v: Boolean);
    /** A flag indicating if the export to PDF action is available or not.
     *  @default true */
    get showExportToPDF(): Boolean;
    set showExportToPDF(v: Boolean);
    /** A flag indicating if the export to CSV action is available or not.
     *  @default true */
    get showExportToCsv(): Boolean;
    set showExportToCsv(v: Boolean);
    /** A flag indicating the new visualization dialog should be displayed automatically when this view is presented.
     * This setting requires {@link startInEditMode} set to true.
     *  @default false */
    get startWithNewVisualization(): Boolean;
    set startWithNewVisualization(v: Boolean);
    /**  A flag that indicates if the "Change data source" button should be displayed or not.
     *  @default true */
    get showChangeDataSource(): Boolean;
    set showChangeDataSource(v: Boolean);
    /** A flag that indicates if the edit button for a datasource in the visualization editor should be displayed or not.
     *  @default false */
    get showEditDataSource(): Boolean;
    set showEditDataSource(v: Boolean);
    /** A flag indicating if the button "Add fields from a Machine Learning model" (in the visualization editor) should be available or not.
     *  @default false */
    get showMachineLearningModelsIntegration(): Boolean;
    set showMachineLearningModelsIntegration(v: Boolean);
    /** A flag indicating if the data source selection dialog (displayed when creating a new visualization) includes a search box on top to search for data sources.
     * @default false */
    get showDataSourceSelectionDialogSearch(): Boolean;
    set showDataSourceSelectionDialogSearch(v: Boolean);
    /** A flag indicating if the button "Add fields from another data source" (in the visualization editor) should be available or not.
     *  @default true */
    get showDataBlending(): Boolean;
    set showDataBlending(showDataBlending: Boolean);
    /** A flag that indicates if the menu (containing Refresh, Export, etc.) should be displayed or not.
     *  @default true */
    get showMenu(): Boolean;
    set showMenu(v: Boolean);
    /** A flag indicating if tooltips are displayed on hover for chart visualizations.
     *  @default true */
    get hoverTooltipsEnabled(): Boolean;
    set hoverTooltipsEnabled(v: Boolean);
    /** A flag indicating if crosshairs are displayed for charts.
     *  @default false */
    get crosshairsEnabled(): Boolean;
    set crosshairsEnabled(v: Boolean);
    /** A flag indicating if the Dashboard's description should be displayed.
     *  @default true */
    get showDescription(): Boolean;
    set showDescription(v: Boolean);
    /** A flag indicating whether to display the dropdown for date filters
     *  @default true */
    get showDateFilterMenu(): Boolean;
    set showDateFilterMenu(v: Boolean);
    /** A flag indicating if the Dashboard's title should be displayed.
     *  @default true */
    get showTitle(): Boolean;
    set showTitle(v: Boolean);
    /** A flag indicating if interactive filtering is enabled.
     *  @default false */
    get interactiveFilteringEnabled(): Boolean;
    set interactiveFilteringEnabled(v: Boolean);
    /** A flag indicating if server side saving is enabled.
      *  @default true */
    get serverSideSave(): Boolean;
    set serverSideSave(v: Boolean);
    /** The list of available chart types for the end user to select from. Please note this only affects the list of visualizations to pick from,
     * if a given dashboard is using a visualization not listed here, that visualization will be used anyway.
     * The list is initially populated with all supported visualization types, so you can just remove the ones you would like to get excluded.
     * Please note that {@link RVChartType.Pivot} and {@link RVChartType.Image} are used as the initial chart type
     * for a new visualization (depending on the source selected) regardless if those types are not included in this list.
     */
    get chartTypes(): RVChartTypeItem[];
    set chartTypes(v: RVChartTypeItem[]);
    /**
     * The list of providers that will be allowed when clicking "+ Data Source" in the data source selector, if empty (the default) or null
     * data source creation will be disabled.
     */
    get addDataSourceEnabledProviders(): RVProviderType[];
    set addDataSourceEnabledProviders(v: RVProviderType[]);
    /**
    * This property allows customization of the grouping separator that appears between the category and field name. The default character used is "/" (forward slash).
    *
    * ```javascript
    * revealView.categoryGroupingSeparator = " - ";
    *```
    */
    categoryGroupingSeparator: string | null;
    /**
    * This property allows the customization of the default visualization when a new visualization is created.
    *
    * ```javascript
    * revealView.defaultChartType = RVChartType.ColumnChart;
    *```
    */
    defaultChartType: RVChartType;
    defaultCustomChartType: string | null;
    get assets(): RVAssets;
    /** In Dashboard Editor, indicates if a small set of data should be displayed as tooltip when moving the mouse over a field. */
    get isPreviewDataInVisualizationEditorEnabled(): Boolean;
    set isPreviewDataInVisualizationEditorEnabled(value: Boolean);
    onDateFilterMenuOpening: ((args: DateFilterMenuOpeningEventArgs) => void) | null;
    _invokeCustomizeDateFilterMenuItems(items: any[], cancelCallback?: () => void): void;
    convertDateFilterOption(dfmi: RVDateFilterMenuItem): any;
}

class GlobalFiltersArray extends Array<IRVDashboardFilter> {
    /**
     * Gets the first filter with the given title.
     *
     * @param {string} title The title of the filter to search for.
     * @returns {$.ig.RVDashboardFilter} The first filter with the given title (case sensitive), null if there's no filter with that title.
     */
    getByTitle(title: string): IRVDashboardFilter | null;
    /**
     * Gets the filter with the given ID.
     *
     * @param {string} id The ID of the filter to search for.
     * @returns {$.ig.IRVDashboardFilter} The filter with the given ID (case sensitive), null if there's no filter with that ID.
     */
    getById(id: string): IRVDashboardFilter | null;
}
//# sourceMappingURL=globalFiltersArray.d.ts.map

/** Class that represents all visualizations in a dashboard as an array. */
class VisualizationsArray extends Array<RVVisualization> {
    /**
     * Gets the first visualization with the given title.
     * Returns RVVisualization - The first visualization with the given title (case sensitive), null if there's no visualization with that title.
     */
    getByTitle(title: string): RVVisualization | null;
    /**
     * Gets the visualization with the given ID.
     * Returns RVVisualization - The visualization with the given ID (case sensitive), null if there's no visualization with that ID.
     */
    getById(id: string): RVVisualization | null;
}
//# sourceMappingURL=visualizationsArray.d.ts.map

/**
 * The class representing a Dashboard model. To get an instance of this class you could use:
 *  - {@link RVDashboard.loadDashboard}
 *  - {@link RVDashboard.loadDashboardAsync}
 *  - {@link RVDashboard.loadDashboardFromContainer}
 */
class RVDashboard {
    /** @hidden */
    _dashboardModel: any;
    /** @hidden */
    _filters: GlobalFiltersArray;
    /** @hidden */
    _visualizations: VisualizationsArray;
    /** @hidden */
    _delegate: SdkDocumentDelegate;
    /** @hidden */
    _subscribedViews: Set<RevealView>;
    /** @hidden */
    _hasPendingChanges: boolean;
    /** @hidden */
    _dashboardId: string | null;
    /** @hidden */
    constructor();
    /** Loads the dashboard */
    static loadDashboard(dashboardId: string): Promise<RVDashboard>;
    static loadDashboard(dashboardId: string, onSuccess: (dashboard: RVDashboard) => void): void;
    static loadDashboard(dashboardId: string, onSuccess: (dashboard: RVDashboard) => void, onError: (msg: string) => void): void;
    /**
    * @deprecated Loads the dashboard asynchronously. Please use the loadDashboard method, as this method will be removed in a future release.
    */
    static loadDashboardAsync(dashboardId: string): Promise<RVDashboard>;
    /** Loads the dashboard from container */
    static loadDashboardFromContainer(blob: Blob): Promise<RVDashboard>;
    static loadDashboardFromContainer(blob: Blob, onSuccess: (dashboard: RVDashboard) => void, onError: (msg: string) => void): void;
    /** @hidden */
    static _create(dashboardModel: any, dashboardId: string | null): RVDashboard;
    private _loadFilters;
    dateFilterChanged(filter: RVDateDashboardFilter): void;
    private _getRVFilter;
    private _loadVisualizations;
    /**
     * The list of visualizations in the dashboard.
     */
    get visualizations(): VisualizationsArray;
    /**
     * The list of filters in the dashboard.
     */
    get filters(): GlobalFiltersArray;
    /**
     * The first date global filter configured in this dashboard, or null if no date filter is configured.
     */
    get dateFilter(): RVDateDashboardFilter | null;
    set dateFilter(v: RVDateDashboardFilter | null);
    get firstDateGlobalFilterIndex(): number;
    /** Returns <b>true</b> if the user made changes to the dashboard that were not saved yet. */
    get hasPendingChanges(): boolean;
    /**
     * The name or title of the dashboard.
     */
    get title(): string;
    /**
     * The name or title of the dashboard.
     */
    set title(text: string);
    /**
     * The description of the dashboard.
     */
    get description(): string;
    /**
     * The description of the dashboard.
     */
    set description(text: string);
    /**
     * The id of the dashboard.
     */
    get dashboardId(): string | null;
    /**
     * This event is triggered when the the title of the dashboard is changed
     * was added/removed or updated.
     */
    onTitleChanged: ((newTitle: string) => void) | null;
    /**
     * This event is triggered when the list of visualizations has changed because a visualization
     * was added/removed or updated.
     */
    onVisualizationsChanged: ((visualizations: RVVisualization[]) => void) | null;
    /**
     * This event is triggered when the list of filters has changed because a filter
     * was added or removed.
     */
    onFiltersChanged: ((filters: IRVDashboardFilter[]) => void) | null;
    /**
     * This event is triggered when the date filter was modified.
     */
    onDateFilterChanged: ((dateFilter: RVDateDashboardFilter | null) => void) | null;
    /**
     * This event is triggered when the hasPendingChanges flag has changed its value.
     */
    onHasPendingChangesChanged: ((hasPendingChanges: boolean) => void) | null;
    /** @hidden */
    _subscribeDashboardView(view: any): void;
    /** @hidden */
    _unsubscribeDashboardView(view: any): void;
    /** @hidden */
    _visualizationsChanged(): void;
    /** @hidden */
    _titleChanged(newTitle: string): void;
    /** @hidden */
    _dateFilterChanged(filter: RVDateDashboardFilter | null): void;
    /** @hidden */
    _filtersChanged(): void;
    /** @hidden */
    _hasPendingChangesChanged(): void;
    /** @hidden */
    _widgetAdded(widget: any, index: number): void;
    /** @hidden */
    _titleUpdated(newTitle: string): void;
    /** @hidden */
    _widgetDeleted(index: number): void;
    /** @hidden */
    _widgetMoved(from: number, to: number): void;
    /** @hidden */
    _widgetUpdated(widget: any): void;
    /** @hidden */
    _filterAdded(filter: any, index: number): void;
    /** @hidden */
    _filterUpdated(filter: any, index: number): void;
    /** @hidden */
    _getFilterIndex(filter: any): number;
    /** @hidden */
    _filterDeleted(filter: any, index: number): void;
    /** @hidden */
    _hasPendingChangesModified(hasPendingChanges: boolean): void;
    /** @hidden */
    _loadDashboardModel(newDashboard: any): void;
    /** @hidden */
    _loadDashboardDocument(newDashboard: any): void;
    /** @hidden */
    _subscribeView(revealView: RevealView): void;
    /** @hidden */
    _unsubscribeView(revealView: RevealView): void;
    /** @hidden */
    _updateFilterSelectedValues(filter: RVDashboardFilter, selectedValues: Array<object>): void;
    /** @hidden */
    _notifyViewsThatGlobalFilterSelectedValuesChanged(revealView: RevealView | null): void;
    /** @hidden */
    _notifyViewsThatDateFilterChanged(dateFilter: RVDateDashboardFilter, revealView?: RevealView | null): void;
    /** @hidden */
    _userFilterChanged(revealView: RevealView, filterModel: any): void;
    /** @hidden */
    _userDateFilterChanged(revealView: RevealView, filterModel: any): void;
    /** @hidden */
    notifyQuickFilterSelectedValuesChanged(filters: Array<RVVisualizationFilter>): void;
}

/**
 * The class representing a visualization (widget) in the dashboard model.
 */
class RVVisualization {
    /** @ignore */
    _widgetModel: any;
    /** @ignore */
    _dashboard: RVDashboard | null;
    /** @ignore */
    constructor(widgetModel: any, dashboard: RVDashboard | null);
    private _filters;
    /**
     * The ID of the visualization
     */
    get id(): string;
    /**
     * Gets the visibility status of the visualization's title and breadcrumb.
     * @returns {boolean} - true if the title is visible, false otherwise.
    */
    get showTitle(): boolean;
    /**
     * Sets the visibility of the visualization's title and breadcrumb.
     * @param {boolean} value - If true, the title will be shown; if false, it will be hidden.
     */
    set showTitle(value: boolean);
    /**
     * The title of the visualization
     */
    get title(): string;
    /**
     * The chart used in this visualization
     */
    get chartType(): RVChartType;
    /**
     * Returns the ID of the data source referenced by this visualization (if any).
     */
    get referencedDataSourceId(): string | null;
    /**
     * Returns the ID of the data source used by the resource refenced by this visualization (if any).
     * For a visualization getting data from a JSON document loaded from a REST services, this ID
     * will be the ID of the REST data source.
     */
    get referencedResourceDataSourceId(): string | null;
    private getReferenceDataSourceItem;
    get filters(): QuickFiltersArray;
    /**
   * Analyze the widget model and update the values that are to be returned by the Filters property.
   */
    loadFilters(): void;
    updateFilterSelectedValues(filter: RVVisualizationFilter, selectedValues: Array<RVFilterValue>): boolean;
    /** @hidden */
    _notifyViewsThatQuickFilterSelectedValuesChanged(): void;
}

/** The class is used to render the thumbnail of a dashboard in your application.
 *  You need to set the dashboardInfo or the dashboard property in order to render a thumbnail.
 */
class RevealDashboardThumbnailView {
    private _dashboardInfo;
    private _selector;
    private _thumbnailView;
    private _dashboard;
    /**
     * @param selector The selector is a string that references the HTML element to attach the view to, like a div.
     */
    constructor(selector: string);
    /** Gets/sets the dashboard information that is/to be used to render. */
    get dashboardInfo(): any;
    set dashboardInfo(i: any);
    /** Gets/sets the dashboard that is/to be rendered.  */
    get dashboard(): RVDashboard | null;
    set dashboard(i: RVDashboard | null);
    /** Updates the size of a thumbnail */
    updateSize(): void;
    private _presentThumbnailView;
    private _updateThumbnail;
}
//# sourceMappingURL=revealDashboardThumbnailView.d.ts.map

/**
* This class represents an object that is used to show an image within the customized app user interface.
*/
class RVImageAsset {
    protected _int: any;
    /** @ignore */
    constructor(image: RVImage, title: string, subtitle: string);
    /**
    * Retrieve the internal intermediate element used to represent the image.
    */
    get revealElement(): object;
    /**
    * Retrieve the RVImage object that contains the source of the image and the alt text used to describe the image for accessibility.
    */
    get image(): RVImage | null;
    /**
    * An RVImage object that contains the source of the image and the alt text used to describe the image for accessibility.
    */
    set image(value: RVImage | null);
    /**
    * Retrieve the string used as the subtitle label.
    */
    get subtitle(): string;
    /**
    * A string used as the subtitle label.
    */
    set subtitle(value: string);
    /**
    * Retrieve the string used as the title label.
    */
    get title(): string;
    /**
    * A string used as the title label.
    */
    set title(value: string);
}

/**
* Class that contains assignable assets contained within the SDK's user interface.
*/
class RVAssets {
    protected _int: any;
    /** @ignore */
    constructor(...paramArray: any[]);
    /**
    * Retrieve the internal intermediate element used to represent the image.
    */
    get revealElement(): object;
    /**
    * Retrieve the custom asset item that contains the image, title, and subtitle shown when a dashboard does not contain any visualizations.
    */
    get dashboardEmptyState(): RVImageAsset | null;
    /**
    * Custom image, title, and subtitle shown when a dashboard does not contain any visualizations.
    */
    set dashboardEmptyState(value: RVImageAsset | null);
}

/**
* Class representing an object that is used to show an area of spacing between menu items.
*/
class RVMenuSeparatorItem extends RVMenuItemBase {
    /** @ignore */
    constructor();
}

/**
* Class representing an object that is used to show a submenu item. This item can contain an icon, title text, and click action of a menu item.
*
* Important Note: Currently, this class cannot be used for creating new submenu items, or editing items contained in application supplied submenus.
*/
class RVMenuSubmenuItem extends RVMenuItemBase {
    /** @ignore */
    constructor(title: string | null, icon: object | null);
}

/**
* Class representing an object that is used to show an icon, title text, and click action of a menu item.
*/
class RVMenuItem extends RVMenuItemBase {
    /** @ignore */
    constructor(title: string);
    constructor(title: string, icon: object);
    constructor(title: string, icon: object, action: () => void);
    /**
    * Retrieve the block of code to execute after the menu item is clicked.
    */
    get action(): (() => void) | null;
    /**
    * Assign a block of code to execute after the menu item is clicked.
    */
    set action(value: (() => void) | null);
}

/**
* Enumeration which specifies where a popup menu is about to be displayed.
*/
enum RVMenuLocation {
    /**
    * The popup menu will display in the top right corner of the dashboard.
    */
    Dashboard = 0,
    /**
    * The popup menu will display in the top right corner of the visualization.
    */
    Visualization = 1
}

/**
 * The class representing a visualization field.
 */
class RVField {
    /** @ignore */
    _name: string;
    _label: string;
    _type: RVDashboardDataType;
    _weekLevelEnabled: boolean;
    /** @ignore */
    constructor(name: string, label: string, type: RVDashboardDataType);
    /**
    * Gets the name of the field
    * This is a readonly property as this is not customizable.
    */
    get name(): string;
    /**
    * Gets the label of the field
    */
    get label(): string;
    /**
    * Sets the label of the field
    */
    set label(value: string);
    /**
    * Gets the data type of the field
    * This is a readonly property as this is not customizable.
    */
    get type(): RVDashboardDataType;
    /** @ignore */
    set weekLevelEnabled(value: boolean);
    /** @ignore */
    get weekLevelEnabled(): boolean;
}

enum SupportedLocales {
    En = "en",
    De = "de",
    Es = "es",
    Fr = "fr",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Ms = "ms",
    Nl = "nl",
    Pt = "pt",
    Ru = "ru",
    ZhCn = "zh-cn",
    ZhTw = "zh-tw"
}

/**
 * Provides context information for a localization request.
 */
class RVLocalizationContext {
    private _dashboardId;
    /**
     * The ID of the dashboard where the localization is being done.
     * It is null if the localization is not being done in the context of a particular dashboard.
     */
    get dashboardId(): string | null;
    set dashboardId(value: string | null);
    constructor(dashboardId?: string | null);
}
/**
 * Provides context information for a formatting request.
 */
class RVFormattingContext {
    private _dashboardId;
    private _requestingInitialFormat;
    /**
     * Returns true iif the field has no formatting assigned. This can be used to avoid providing a new format to a field that has
     * a format that was customized by the user.
     */
    get requestingInitialFormat(): boolean;
    set requestingInitialFormat(value: boolean);
    /**
     * The ID of the dashboard where the formatting is being done.
     * It is null if the formatting is not being done in the context of a particular dashboard.
     */
    get dashboardId(): string | null;
    set dashboardId(value: string | null);
    constructor(dashboardId: string | null, requestingInitialFormat: boolean);
}
/**
 * Types of elements that can be localized. @see {@link RevealSdkSettings.localizedStringsProvider}
 */
enum RVLocalizationElementType {
    DashboardTitle = 0,
    DashboardFilterTitle = 1,
    VisualizationTitle = 2,
    FieldLabel = 3,
    VisualizationFieldLabel = 4
}
/**
 * Types of aggregation.
 */
enum RVDashboardAggregationType {
    /**
     * Aggregation not defined, or not applies for the current context.
     */
    NotSet = 0,
    /**
     * Count of rows, including empty and repeated rows.
     */
    CountRows = 1,
    /**
     * Count of non empty rows.
     */
    CountNonEmpty = 2,
    /**
     * Count of distinct rows.
     */
    CountDistinct = 3,
    /**
     * Minimum value
     */
    Min = 4,
    /**
     * Maximum value
     */
    Max = 5,
    /**
     * Sum of all values
     */
    Sum = 6,
    /**
     * Average of values
     */
    Avg = 7,
    /**
     * Standard deviation of values.
     */
    StDev = 8,
    /**
     * Variance.
     */
    Variance = 9
}
/**
 * Base class for localization elements.
 */
abstract class RVLocalizationElement {
    private _elementType;
    constructor(elementType: RVLocalizationElementType);
    /**
     * Type of the localization element.
     */
    get elementType(): RVLocalizationElementType;
}
/**
 * Base class for localization elements that consist of a simple title.
 */
abstract class RVTitleElement extends RVLocalizationElement {
    private _title;
    constructor(elementType: RVLocalizationElementType);
    /**
     * The current title of the element.
     */
    get title(): string | null;
    set title(value: string | null);
}
/**
 * Dashboard title to be localized.
 */
class RVDashboardTitleElement extends RVTitleElement {
    constructor(title?: string | null);
}
/**
 * Visualization title to be localized.
 */
class RVVisualizationTitleElement extends RVTitleElement {
    constructor(title?: string | null);
}
/**
 * Dashboard filter title to be localized.
 */
class RVDashboardFilterTitleElement extends RVTitleElement {
    constructor(title?: string | null);
}
/**
 * Base class for field label localization elements.
 */
class RVFieldLabelElementBase extends RVLocalizationElement {
    private _name;
    private _label;
    constructor(elementType: RVLocalizationElementType, name?: string | null, label?: string | null);
    /**
     * The name of the field
     */
    get name(): string | null;
    set name(value: string | null);
    /**
     * The current label of the field.
     */
    get label(): string | null;
    set label(value: string | null);
}
/**
 * Field label to be localized. This field is not (yet) part of any visualization, nor is it (yet) used in a summarization definition.
 */
class RVFieldLabelElement extends RVFieldLabelElementBase {
    constructor(name?: string | null, label?: string | null);
}
/**
 * Field label to be localized. The field is being used in a visualization and can have some aggregation applied to it.
 */
class RVVisualizationFieldLabelElement extends RVFieldLabelElementBase {
    private _aggregationType;
    constructor(name?: string | null, label?: string | null, aggregationType?: RVDashboardAggregationType);
    /**
     * The aggregation type applied to the field, if any.
     * Has value "NotSet" when the visualizationField is not a measure.
     */
    get aggregationType(): RVDashboardAggregationType;
    set aggregationType(value: RVDashboardAggregationType);
}
/**
 * The list of dashboard data types.
 */
enum RVDashboardDataType {
    /**
     * Text data
     */
    String = 0,
    /**
     * Numeric data, including integer and floating-point values
     */
    Number = 1,
    /**
     * Date data
     */
    Date = 2,
    /**
     * Date data including time
     */
    DateTime = 3,
    /**
     * Time data
     */
    Time = 4
}
/**
 * Information about the field to be formatted.
 */
class RVFieldFormattingDescriptor {
    private _fieldName;
    private _dataType;
    private _currentSettings;
    private _isAggregated;
    private _dateAggregationType;
    constructor(fieldName: string, dataType: RVDashboardDataType, currentSettings: RVFormattingSpec | null, isAggregated: boolean, dateAggregationType: RVDashboardDateAggregationType);
    /**
     * Name of the field
     */
    get fieldName(): string;
    set fieldName(value: string);
    /**
     * Data type of the field
     */
    get dataType(): RVDashboardDataType;
    set dataType(value: RVDashboardDataType);
    /**
     * The field's current formatting
     */
    get currentSettings(): RVFormattingSpec | null;
    set currentSettings(value: RVFormattingSpec | null);
    /**
     * True iif the field to be formatted is aggregated.
     */
    get isAggregated(): boolean;
    set isAggregated(value: boolean);
    /**
     * Date aggregation type, if applicable.
     */
    get dateAggregationType(): RVDashboardDateAggregationType;
    set dateAggregationType(value: RVDashboardDateAggregationType);
}
/**
 * Base class for formatting specifications.
 */
abstract class RVFormattingSpec {
    private _locale;
    /**
     * Locale used for numerals and date names. Must be in ISO language - ISO country format. E.g.: 'en-us'.
     */
    get locale(): string | null;
    set locale(value: string | null);
}
/**
 * Date field formatting specification.
 */
class RVDateFormattingSpec extends RVFormattingSpec {
    private _dateFormat;
    /**
     * Date format pattern. Examples:
     * ```
     * 'yyyy-MMM-dd' // 2022-Jan-29
     * 'MM/dd/yy'    // 01/13/22
     * 'yyyy-WW'     // 2022-1 (first semester)
     * 'yyyy-QQ'     // 2022-1 (first quarter)
     * 'HH:00'       // 17:00
     * 'HH:mm'       // 01:30
     * ```
     */
    get dateFormat(): string | null;
    set dateFormat(value: string | null);
}
/**
 * Number field formatting specification
 */
class RVNumberFormattingSpec extends RVFormattingSpec {
    private _formatType;
    /**
     * Format type
     */
    get formatType(): RVDashboardNumberFormattingType;
    set formatType(value: RVDashboardNumberFormattingType);
    private _decimalDigits;
    /**
     * Number of decimal digits. Default is 0.
     */
    get decimalDigits(): number;
    set decimalDigits(value: number);
    private _showGroupingSeparator;
    /**
     * Show/Hide grouping separator
     */
    get showGroupingSeparator(): boolean;
    set showGroupingSeparator(value: boolean);
    private _currencySymbol;
    /**
     * Custom currency symbol
     */
    get currencySymbol(): string | null;
    set currencySymbol(value: string | null);
    private _negativeFormat;
    /**
     * Negative values format type
     */
    get negativeFormat(): RVDashboardNegativeFormatType;
    set negativeFormat(value: RVDashboardNegativeFormatType);
    private _applyMkFormat;
    /**
     * Apply M/K format. Default is false. It only applies to some of the visualizations (e.g. charts)
     */
    get applyMkFormat(): boolean;
    set applyMkFormat(value: boolean);
}
/**
 * The list of formatting options for a numeric data.
 */
enum RVDashboardNumberFormattingType {
    /**
     * No formatting
     */
    None = 0,
    /**
     * Number formatting
     */
    Number = 1,
    /**
     * Percentage formatting
     */
    Percent = 2,
    /**
     * Currency formatting
     */
    Currency = 3
}
/**
 * The list of formatting options for a negative numeric data.
 */
enum RVDashboardNegativeFormatType {
    /**
     * Empty formatting
     */
    Empty = 0,
    /**
     * Formatting with a minus sign
     */
    MinusSign = 1,
    /**
     * Formatting with a parenthesis
     */
    Parenthesis = 2
}
/**
 * The list of periods of time supported for aggregation.
 */
enum RVDashboardDateAggregationType {
    /**
     * Year period
     */
    Year = 0,
    /**
     * Quarter period
     */
    Quarter = 1,
    /**
     * Month period
     */
    Month = 2,
    /**
     * Day period
     */
    Day = 3,
    /**
     * Hour period
     */
    Hour = 4,
    /**
     * Minute period
     */
    Minute = 5
}

/** This class is used to specify settings for visualizations like Choropleth or Scatter Map. */
class VisualizationsConfiguration {
    private _mapVisualizations;
    private _scatterMapVisualizations;
    /**
     * The maps configuration used by Choropleth and Scatter Map visualizations.
     */
    get maps(): MapVisualizationsConfiguration;
    /**
     * The configuration used by Scatter Map visualizations
     */
    get scatterMaps(): ScatterMapVisualizationsConfiguration | null;
    set scatterMaps(scatterMapVizConfig: ScatterMapVisualizationsConfiguration | null);
}
class MapVisualizationsConfiguration {
    get shapeFilesUrl(): string;
    set shapeFilesUrl(url: string);
}
class ScatterMapVisualizationsConfiguration {
    private _mapImageryType;
    private _mapImageryProviderToken;
    private _mapImageryUrl;
    constructor(mapImageryType: RVMapImageryType, token: string);
    static createOpenStreetMapConfiguration(url: string): ScatterMapVisualizationsConfiguration;
    get mapImageryType(): RVMapImageryType;
    get mapImageryProviderToken(): string | null;
    get mapImageryUrl(): string | null;
}
enum RVMapImageryType {
    Esri = "Esri",
    Bing = "Bing",
    MapBox = "MapBox",
    OpenStreetMap = "OpenStreetMap"
}
//# sourceMappingURL=visualizationsConfiguration.d.ts.map

class BetaFeatures {
    static readonly interactiveFiltering = "interactiveFiltering";
    static readonly newGauges = "newGauges";
    static readonly newPieChart = "newPieChart";
    static readonly newDonutChart = "newDonutChart";
    static readonly decimalPrecision = "decimalPrecision";
    static readonly newTooltips = "newTooltips";
    constructor();
    /**
     * Enables a list of beta features
     * @param featuresArray list of features to enable
     */
    enable(...featuresArray: String[]): void;
    /**
     * Indicates if a beta feature is enabled
     * @param feature
     * @returns true if the feature is enabled
     */
    isEnabled(feature: String): boolean;
    /**
     * Disables a list of beta features
     * @param featuresArray list of features to disable
     */
    disable(...featuresArray: String[]): void;
    /**
     * Gets the list of enabled beta features
     * @returns an array of enabled features
     */
    getEnabledFeatures(): any;
}

/** This class is used to specify global settings for the SDK. */
class RevealSdkSettings {
    private static _oAuthAuthenticatedBaseUrl;
    private static _localizationService;
    /**Allows enabling and disabling beta features.
     */
    static betaFeatures: BetaFeatures;
    private static _onThemeChanged;
    /** @ignore */
    constructor();
    /** Get/sets the theme to be used by {@link RevealView} when rendering a dashboard.
     * Make sure to set the theme before you have any RevealView rendering a dashboard.
     */
    static get theme(): RevealTheme;
    static set theme(theme: RevealTheme);
    static set enableNewCharts(value: boolean);
    static get enableNewCharts(): boolean;
    static addThemeChangedListener(id: string, listener: (theme: RevealTheme) => void): void;
    /**
     * Set the base url where Reveal SDK Server component is running.
     * You'll need to use this in cases where the backend and the front-end are served from different urls.
     * @param base address of the reveal server component.
     */
    static setBaseUrl(base: string): void;
    /**
     * Set the base url that will be used to redirect the final OAuth authentication step, /oauth/authenticated will be added to the provided URL.
     * This is usually just a fake URL that is used only to detect the authentication completed and to get the token ID to be used in the next
     * step of the authentication flow.
     * By default this URL is set to the same value specified with setBaseUrl, you might need to change it if your backend and frontend
     * are running on separate base URLs, as this URL needs to match the frontend URL so some JS scripts can run properly.
     * You might need to put a valid web page under {base}/oauth/authenticated/* so the browser doesn't display an error when redirected to this URL.
     * @param base The URL to use as the base URL for OAuth authentication complete.
     */
    static setOAuthAuthenticatedBaseUrl(base: string): void;
    static getOAuthAuthenticatedBaseUrl(): string | null;
    /**
     * Specifies a callback function that will be invoked before a request to the Reveal backend and might return
     * additional headers to be included in the request.
     * The specified function is expected to return an object with the headers, like:
     * { 'Session-Id': sessionId }
     * This is useful to send authentication headers to the backend.
     *
     * **JavaScript**:
     * ```javascript
     * RevealSdkSettings.setAdditionalHeadersProvider(function (url) {
     *   var headers = {};
     *   headers["x-header-one"] = "single_value";
     *   headers["x-header-two"] = ["value_1", "value_2"];
     *   return headers;
     * });
     * ```
     *
     * **TypeScript**:
     * ```typescript
     *  RevealSdkSettings.setAdditionalHeadersProvider((url: string) => {
     *  var headers: Record<string, any> = {};
     *  headers["x-header-one"] = "single_value";
     *  headers["x-header-two"] = ["value_1", "value_2"];
     *  return headers;
     *});
     *```
    */
    static setAdditionalHeadersProvider(provider: (url: string) => Record<string, any> | null): void;
    /**
     * Configures if the AJAX requests sent by Reveal to the backend should include authentication cookies or not.
     * You might need to set this flag to true when your backend uses cookies for authentication and session handling and the frontend
     * is in a different domain (CORS rules applies), for example if you're using Angular or React.
     * @param flag true if the AJAX request sent by Reveal when it sends a request to the backend should have "withCredentials: true" or not.
     */
    static set requestWithCredentialsFlag(flag: boolean);
    static get requestWithCredentialsFlag(): boolean;
    /** The URL where the MapData.json could be retrieved from. ShapesMetadataFileUrl + "MapData.json" should be pointing to valid MapData.json. */
    static get shapeFilesUrl(): string;
    static set shapeFilesUrl(url: string);
    private static _visualizations;
    /** Visualization settings */
    static get visualizations(): VisualizationsConfiguration;
    /** Call and await this before you render a RevealView component to make sure all the needed fonts are loaded in the browser.
     *  You might also want to call and await this if you update the {@link RevealSdkSettings.theme} with another theme that's
     *  using different fonts that might not be loaded.
     *  Not awaiting this might result on some texts(like dashboard title) being cropped on initial load.
    */
    static ensureFontsLoaded(): Promise<void>;
    /** @deprecated Call and await this before you render a RevealView component to make sure all the needed fonts are loaded in the browser.
     *  You might also want to call and await this if you update the {@link RevealSdkSettings.theme} with another theme that's
     *  using different fonts that might not be loaded.
     *  Not awaiting this might result on some texts(like dashboard title) being cropped on initial load.
     *
     * Please use the ensureFontsLoaded method, as this method will be removed in a future release.
    */
    static ensureFontsLoadedAsync(): Promise<void>;
    /**
     * Specifies a callback function that will be invoked when working with a dashboard and might return a replacement text
     * -usually a localized value- to be used instead of the original.
     * @param element the element that needs to be localized, e.g. a Widget title. The current text is a property of this object.
     * @param localizationContext provides context information for the localization request. In particular, the dashboard ID containing the element to be localized.
     * @returns The replacement text. A null return value is the same as returning the current text.
     */
    static localizedStringsProvider: (element: RVLocalizationElement, localizationContext: RVLocalizationContext) => string | null;
    /**
     * Specifies a callback function that will be invoked when working with a dashboard and might return the formatting to be used for the given field.
     * @param desc Information about the field, including name, data type and current formatting settings.
     * @param fmtContext provides Context information for the formatting request. In particular, the dashboard ID (if applicable).
     * @returns The formatting to apply to the given field. If null, the original formatting will be applied.
     */
    static fieldFormattingSettingsProvider: (desc: RVFieldFormattingDescriptor, fmtContext: RVFormattingContext) => RVFormattingSpec | null;
    /** Returns the current locale to be used to localize Reveal Sdk UI. */
    static getCurrentLocale(): SupportedLocales;
    /** Overrides current localization locale, which is picked up by the browser's, by default.
     *  Make sure you await the promise before overriding the locale again.
     *  Supported locales are "de","es",	"fr",	"it",	"ja",	"ko",	"ms",	"nl",	"pt",	"ru",	"zh-cn" and "zh-tw".
     *
     * ```javascript
     * await RevealApi.RevealSdkSettings.overrideLocale(RevealApi.SupportedLocales.De);
     * ```
     * */
    static overrideLocale(locale: SupportedLocales): Promise<void>;
    /** @ignore */
    static set hoverTooltipAlpha(value: number);
    /** @ignore */
    static get hoverTooltipAlpha(): number;
    static set enableScalingSupport(value: boolean);
    static get enableScalingSupport(): boolean;
    /** @ignore */
    static set useLocalTimeZoneForNamedRanges(value: boolean);
    /** @ignore */
    static get useLocalTimeZoneForNamedRanges(): boolean;
}

/** Utility class used to load dashboards. */
class RevealUtility {
    /** @hidden */
    constructor();
    /**
     * Loads the dashboard with the given ID from the standard endpoint in the server.
     * @param {string} dashboardId The ID of the dashboard to open, this ID will be received in the server: IRevealSdkContext.GetDashboardAsync
     * @param {function} onSuccess A callback that will receive an instance of $.ig.RVDashboard class if the loading was successful.
     * @param {function} onError A callback with the error message if the loading operation failed.
     */
    static loadDashboard(dashboardId: string): Promise<RVDashboard>;
    static loadDashboard(dashboardId: string, onSuccess: (dashboard: RVDashboard) => void, onError: (msg: string) => void): void;
    /** @hidden */
    static createDashboardFromJsonObject(str: any): RVDashboard;
    /** @hidden */
    static createLocalizedDashboard(dashboardJson: any, dashboardId: string | null): RVDashboard;
    /** @hidden */
    static createLocalizationProvider(dashboardId: string | null, requestingInitialFormat: boolean): SdkDashboardLocalizationProvider | null;
    /**
     * Loads a dashboard from the Blob object with the contents of a .rdash file.
     * @param {Blob} blob The Blob object containing the binary contents of the dashboard in rdash file format.
     * @param {function} onSuccess A callback that will receive an instance of $.ig.RVDashboard class if the loading was successful.
     * @param {function} onError A callback with the error message if the loading operation failed.
     */
    static loadDashboardFromContainer(blob: Blob): Promise<RVDashboard>;
    static loadDashboardFromContainer(blob: Blob, onSuccess: (dashboard: RVDashboard) => void, onError: (msg: string) => void, dashboardId?: string): void;
    /**
     * Generates a new universal identifier.
     * @returns a generated UID
     */
    static generateUID(): string;
    /** @hidden */
    static _isObject(a: any): Boolean;
    /** @hidden */
    static _listContains(list: any[], value: any): Boolean;
    /** @hidden */
    static _forAllElements(list: any[], pos: number, eachBlock: (item: any, completed: () => void) => void, endBlock: () => void): void;
    /** @hidden */
    static _convertDataSource(ds: any): any;
    /** @hidden */
    static _convertDataSourceItem(dsItem: any): any;
}
class SdkDashboardLocalizationProvider {
    private _localizationContext;
    private _formattingContext;
    constructor(localizationContext: RVLocalizationContext, formattingContext: RVFormattingContext);
    getLocalizedString(element: any): string | null;
    getFormattingSettings(desc: any): any;
    sdkLocalizationElement(e: any): RVLocalizationElement;
    sdkFormattingDescriptor(desc: any): RVFieldFormattingDescriptor;
    sdkDashboardDataType(internalDataType: any): RVDashboardDataType;
    sdkFormattingSpec(formatting: any): RVFormattingSpec | null;
    sdkDashboardNumberFormattingType(type: any): RVDashboardNumberFormattingType;
    sdkDashboardNegativeFormatType(type: any): RVDashboardNegativeFormatType;
    sdkDateAggregationType(type: any): RVDashboardDateAggregationType;
    internalFormattingDescriptor(from: RVFormattingSpec): any;
    internalDashboardNumberFormattingType(type: RVDashboardNumberFormattingType): any;
    internalDashboardNegativeFormatType(type: RVDashboardNegativeFormatType): any;
}
//# sourceMappingURL=revealUtility.d.ts.map

/** The class used as the argument to the onFiltersChanged event. */
class FilterChangedEventArgs {
    /** @ignore */
    _filter: RVDashboardFilter;
    /** @ignore */
    _selectedValues: Array<Object>;
    constructor(filter: RVDashboardFilter, selectedValues: Array<Object>);
    /** Gets filter instance. */
    get filter(): RVDashboardFilter;
    /** Gets selected values. */
    get selectedValues(): Array<Object>;
}
//# sourceMappingURL=filterChangedEventArgs.d.ts.map

/**
 * Class representing the event arguments for VisualizationDataLoading event
 * @see {@link RevealView.onVisualizationDataLoading}
 */
class VisualizationDataLoadingEventArgs {
    /**
     * Set this to true to cancel loading data for the visualization
     */
    cancel: boolean;
    /**
     * The visualization loading data
     */
    visualization: RVVisualization;
    /**
     * The error message to display to the end user in the visualization
     */
    errorMessage: string | null;
    /** @ignore */
    constructor(visualization: RVVisualization);
}
//# sourceMappingURL=visualizationDataLoadingEventArgs.d.ts.map

/**
 * Class representing the event arguments for MenuOpening event
 * @see {@link RevealView.onMenuOpening}
 */
class MenuOpeningEventArgs {
    /**
     * Set this to true to cancel loading data for the visualization
     */
    cancel: boolean;
    isInEditMode: boolean;
    menuItems: Array<RVMenuItemBase>;
    menuLocation: RVMenuLocation;
    /**
     * The visualization loading data
     */
    visualization: RVVisualization | null;
    /**
     * The error message to display to the end user in the visualization
     */
    errorMessage: string | null;
    /** @ignore */
    constructor(menuItems: Array<RVMenuItemBase>, menuLocation: RVMenuLocation, isInEditMode: boolean);
}

/**
 * Class representing the event arguments for FieldsInitializing event
 * @see {@link RevealView.fieldsInitializing}
 */
class FieldsInitializingEventArgs {
    /**
    * The list of fields being initialized.
    */
    fields: Array<RVField>;
    /**
    * The data source item where the fields comes from.
    */
    dataSourceItem: RVDataSourceItem;
    /**
      * Sets customized order
      */
    useCustomSort: boolean;
    /** @ignore */
    constructor(fields: Array<RVField>, dataSourceItem: RVDataSourceItem, useCustomSort: boolean);
}

/**
 * The data source object used to represent the local files data source, there are no additional properties in this class
 * as all relevant information is specified in the {@link RVLocalFileDataSourceItem} object.
 */
class RVLocalFileDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** The local file data source item, used to load files from local storage. */
class RVLocalFileDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _uri;
    /** The URI referencing the file, like local://Directory/File.csv. */
    get uri(): nullableString;
    set uri(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Class defining the range that should be used when loading data from an Excel sheet.
 */
class RVExcelRange {
    constructor(locX: number, locY: number, lenX: number, lenY: number);
    /** @hidden */
    static fromJson(json: any): RVExcelRange | null;
    /** @hidden */
    toJson(): any;
    private _locationX;
    get locationX(): number;
    private _locationY;
    get locationY(): number;
    private _lengthX;
    get lengthX(): number;
    private _lengthY;
    get lengthY(): number;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source object used to represent the Excel data source, there are no additional properties in this class
 * as all relevant information is specified in the RVExcelDataSourceItem object.
 */
class RVExcelDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getType(): string;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The base abstract class representing a data source item getting data from a file (a resource).
 * This is the base class for CSV, Excel and JSON data source items.
 * It contains the reference to the resource item providing the file, for example a CSV file from a Web Resource URL
 * will be represented as a {@link RVCsvDataSourceItem} referencing a {@link RVWebResourceDataSourceItem}
 */
abstract class RVResourceBasedDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVDashboardDataSource, resourceItem: RVDataSourceItem);
    /** @hidden */
    toJson(): any;
    private _resourceItem;
    /**
     * The resource item used to get the data for the referenced file, must be an item from one of the resource providers: Sharepoint, Web Resource, REST API, etc.
     */
    get resourceItem(): RVDataSourceItem | null;
    set resourceItem(value: RVDataSourceItem | null);
    /**
     * @hidden
     */
    _getWrapper(): any;
}

type nullableExcelRange = RVExcelRange | null;
/**
 * The data source item used to represent a dataset from an Excel file, it includes information like the
 * name of the sheet to get data from and the range to use when loading data.
 */
class RVExcelDataSourceItem extends RVResourceBasedDataSourceItem {
    constructor(resourceItem: RVDataSourceItem);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _sheet;
    /**
     * Name of the sheet in the worksheet to get the data from, if not specified and @see NamedRange is null,
     * then the first sheet in the file will be used.
     */
    get sheet(): nullableString;
    set sheet(value: nullableString);
    private _range;
    /**
     * Definition of the range to load data from in the specified sheet.
     */
    get range(): nullableExcelRange;
    set range(value: nullableExcelRange);
    private _namedRange;
    /**
     * Named range to get data from, it's optional and if no specified the sheet specified in @see Sheet
     * will be used.
     */
    get namedRange(): nullableString;
    set namedRange(value: nullableString);
    private _pivotTable;
    /**
     * Name of the pivot table to get data from.
     */
    get pivotTable(): nullableString;
    set pivotTable(value: nullableString);
    private _firstRowContainsLabels;
    /**
     * Flag indicating if the first row contains labels or data, it defaults to "true".
     * If you set this flag to <c>false</c> the columns will be automatically named as 'COL1', 'COL2', etc.
     */
    get firstRowContainsLabels(): boolean;
    set firstRowContainsLabels(value: boolean);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The base data source class used to represent a connection to one of the supported database systems.
 */
abstract class RVSqlBasedDataSource extends RVDashboardDataSource {
    private _host;
    /** Host name or IP address to connect to. */
    get host(): nullableString;
    set host(value: nullableString);
    private _port;
    get port(): number;
    set port(value: number);
    /** @hidden */
    constructor(json?: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    _getWrapper(): any;
}

abstract class RVSqlPDSDataSource extends RVSqlBasedDataSource {
    private _processDataOnServerDefaultValue;
    /** Sets the default value for "Process Data on Server" option for this data source, the
     * end user can still change the value, unless {@link processDataOnServerReadOnly} is true.
     */
    get processDataOnServerDefaultValue(): boolean;
    set processDataOnServerDefaultValue(value: boolean);
    private _processDataOnServerReadOnly;
    /**
     * When set to true the user will not be allowed to change the value for "Process Data on Server" option
     * and the default value will be used.
     */
    get processDataOnServerReadOnly(): boolean;
    set processDataOnServerReadOnly(value: boolean);
    /** @hidden */
    constructor(json?: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    _getWrapper(): any;
}

/** Microsoft SQL Server data source. */
class RVSqlServerDataSource extends RVSqlPDSDataSource {
    private _database;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    private _schema;
    /** Name of the schema to use. */
    get schema(): nullableString;
    set schema(value: nullableString);
    private _encrypt;
    /** Set the Encrypt flag in the connection string to the given value, only supported for .NET backends */
    get encrypt(): boolean | null;
    set encrypt(value: boolean | null);
    private _trustServerCertificate;
    /** Set the TrustServerCertificate flag in the connection string to the given value, only supported for .NET backends */
    get trustServerCertificate(): boolean | null;
    set trustServerCertificate(value: boolean | null);
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The base item class used to represent a dataset from one of the supported database systems.
 */
abstract class RVSqlBasedDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVDashboardDataSource);
    /** @hidden */
    toJson(): any;
    private _database;
    /**
     * Name of the database to connect to, optional as this value is usually specified in the data source object.
     */
    get database(): nullableString;
    set database(value: nullableString);
    private _table;
    /**
     * Name of the table (or view) to get data from
     */
    get table(): nullableString;
    set table(value: nullableString);
    /** @hidden */
    _getWrapper(): any;
}

abstract class RVSqlPDSDataSourceItem extends RVSqlBasedDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVSqlPDSDataSource);
    /** @hidden */
    toJson(): any;
    private _processDataOnServer;
    /**
     * Configures if the "Process Data on Server" option is turned on for this item (table or view), defaults to "true"
     */
    get processDataOnServer(): boolean;
    set processDataOnServer(value: boolean);
    /** @hidden */
    _getWrapper(): any;
}

/** Microsoft SQL Server data source item */
class RVSqlServerDataSourceItem extends RVSqlPDSDataSourceItem {
    constructor(dataSource: RVSqlServerDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to */
    get schema(): nullableString;
    set schema(value: nullableString);
    private _procedure;
    /** (Optional) name of the stored procedure to get data from, the procedure is expected to return a result set and might
     * have multiple parameters.
     */
    get procedure(): nullableString;
    set procedure(value: nullableString);
    private _procedureParameters;
    /**Parameters to be passed to the stored procedure, if there is such specified in   {@link RVSqlServerDataSourceItem.procedure} . */
    get procedureParameters(): any;
    set procedureParameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Web resource data source, used to download files from HTTP URL using GET method.
 * See {@link RVRESTDataSource} to use other HTTP methods or to customize parameters, headers and body to sent. */
class RVWebResourceDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the web resource, is expected to be a URL with HTTP or HTTPS scheme. */
    get url(): nullableString;
    set url(value: nullableString);
    private _useAnonymousAuthentication;
    /** Boolean flag indicating if anonymous authentication should be used for this data source or credentials must be requested
     * to the containing application. */
    get useAnonymousAuthentication(): boolean;
    set useAnonymousAuthentication(value: boolean);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Web resource data source item, see {@link RVWebResourceDataSource} for more information. */
class RVWebResourceDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVWebResourceDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _url;
    /** URL to use to download the file. Must match the URL specified in the {@link RVWebResourceDataSource} data source object.  */
    get url(): nullableString;
    set url(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source object used to represent the CSV data source, there are no additional properties in this class
 * as all relevant information is specified in the {@link RVCsvDataSourceItem} object.
 */
class RVCsvDataSource extends RVDashboardDataSource {
    /** @hidden */
    getType(): string;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source item used to represent a dataset from a CSV file, it includes
 * optional settings like the separator to use when parsing the data.
 */
class RVCsvDataSourceItem extends RVResourceBasedDataSourceItem {
    constructor(resourceItem: RVDataSourceItem);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _dateFormat;
    /**
     * Optional date format to use when parsing/detecting date columns, if not specified Reveal
     * will try to infer the date format to use for each column (if it detects the column
     * is a date, date time or time column).
     */
    get dateFormat(): nullableString;
    set dateFormat(value: nullableString);
    private _encoding;
    /**
     * The encoding to use, if not specified Reveal will try to detect it automatically.
     */
    get encoding(): nullableString;
    set encoding(value: nullableString);
    private _separator;
    /**
     * The separator to use, one of ',', ';', or 'TAB'. If not specified it will be detected automatically.
     */
    get separator(): nullableString;
    set separator(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** MySQL data source */
class RVMySqlDataSource extends RVSqlPDSDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _database;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** MySQL data source item */
class RVMySqlDataSourceItem extends RVSqlPDSDataSourceItem {
    constructor(dataSource: RVMySqlDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _procedure;
    /** (Optional) name of the stored procedure to get data from, the procedure is expected to return a result set and might
     * have multiple parameters.
     */
    get procedure(): nullableString;
    set procedure(value: nullableString);
    private _procedureParameters;
    /**Parameters to be passed to the stored procedure, if there is such specified in   {@link RVMySqlDataSourceItem.procedure} . */
    get procedureParameters(): any;
    set procedureParameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Amazon Athena data source
 */
class RVAthenaDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _region;
    /**
     * Region for the service. See the list of supported values in https://docs.aws.amazon.com/general/latest/gr/rande.html.
     */
    get region(): nullableString;
    set region(value: nullableString);
    private _dataCatalog;
    /**
     * Athena's data catalog where the database is. If the value is null, "AwsDataCatalog" will be used.
     */
    get dataCatalog(): nullableString;
    set dataCatalog(value: nullableString);
    private _database;
    /**
     * Database that will be used
     */
    get database(): nullableString;
    set database(value: nullableString);
    private _workgroup;
    /**
     * Workgroup used to run queries. It is optional.
     */
    get workgroup(): nullableString;
    set workgroup(value: nullableString);
    private _outputLocation;
    /**
     * s3 path where the results will be stored. It is optional, but if missing and if the chosen workgroup doesn't have a valid s3 path, the queries will fail.
     */
    get outputLocation(): nullableString;
    set outputLocation(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Amazon Athena data source item.
 */
class RVAthenaDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVAthenaDataSource);
    /** @hidden */
    toJson(): any;
    private _table;
    /**
     * Table or view for this datasource item.
     */
    get table(): nullableString;
    set table(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Amazon S3 data source */
class RVS3DataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _region;
    /**Region for the service. See the list of supported values in https://docs.aws.amazon.com/general/latest/gr/rande.html. */
    get region(): nullableString;
    set region(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Amazon S3 data source item. */
class RVS3DataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVS3DataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _path;
    /** S3 path for the file represented by this item. For example: 's3://my-bucket/path/to/file.csv' */
    get path(): nullableString;
    set path(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** QuickBooks data source */
class RVQuickBooksDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    _realmId: nullableString;
    /** Realm Id, the unique ID identifying a specific QuickBooks company. */
    get realmId(): nullableString;
    set realmId(v: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** QuickBooks data source item */
class RVQuickBooksDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVQuickBooksDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    _entity: nullableString;
    /** QuickBooks Entity  */
    get entity(): nullableString;
    set entity(v: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source object used to represent the in-memory data source, there are no additional properties in this class
 * as all relevant information is specified in the {@link RVInMemoryDataSourceItem} object
 */
class RVInMemoryDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Data source item to get in-memory data.
 * It is used to create a new in-memory item with the specified dataset id.
 */
class RVInMemoryDataSourceItem extends RVDataSourceItem {
    constructor(datasetId: string);
    private _datasetId;
    /**
     * String identifying this in-memory dataset, it might be used to decide what data to return.
     */
    get datasetId(): string;
    set datasetId(value: string);
    private _parameters;
    /** Parameters for the in-memory data source. */
    get parameters(): any;
    set parameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** PostgreSQL data source, it adds the database name property to the base properties inherited from the abstract class RVSqlBasedDataSource. */
class RVPostgresDataSource extends RVSqlPDSDataSource {
    private _database;
    private _schema;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** Name of the schema to use. */
    get schema(): nullableString;
    set schema(value: nullableString);
    constructor();
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** PostgreSQL data source item */
class RVPostgresDataSourceItem extends RVSqlPDSDataSourceItem {
    constructor(dataSource: RVPostgresDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to */
    get schema(): nullableString;
    set schema(value: nullableString);
    private _functionName;
    /** (Optional) name of the function to get data from, the function is expected to return a result set and might have multiple parameters. */
    get functionName(): nullableString;
    set functionName(value: nullableString);
    private _functionParameters;
    /** Parameters to be passed to the function, if there is such specified in {@link RVPostgresDataSourceItem.functionName}. */
    get functionParameters(): any;
    set functionParameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Amazon Redshift data source, it adds the database name property to the base properties inherited from the abstract class RVSqlBasedDataSource. */
class RVRedshiftDataSource extends RVSqlBasedDataSource {
    private _database;
    private _schema;
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** Name of the schema to use. */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Amazon Redshift data source item */
class RVRedshiftDataSourceItem extends RVSqlBasedDataSourceItem {
    constructor(dataSource: RVRedshiftDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to */
    get schema(): nullableString;
    set schema(value: nullableString);
    private _functionName;
    /** (Optional) name of the function to get data from, the function is expected to return a result set and might have multiple parameters. */
    get functionName(): nullableString;
    set functionName(value: nullableString);
    private _functionParameters;
    /** Parameters to be passed to the function, if there is such specified in {@link RVPostgresDataSourceItem.functionName}.*/
    get functionParameters(): any;
    set functionParameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Cube.dev data source
 */
class RVCubeDevDataSource extends RVSqlPDSDataSource {
    private _database;
    private _schema;
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** Name of the schema to use. */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Cube.dev data source item */
class RVCubeDevDataSourceItem extends RVSqlPDSDataSourceItem {
    constructor(dataSource: RVCubeDevDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Microsoft Reporting Services (MS SSRS) data source */
class RVReportingServicesDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the server */
    get url(): nullableString;
    set url(value: nullableString);
    private _path;
    /** Path in the server, used only when SSRS is running integrated into Sharepoint */
    get path(): nullableString;
    set path(value: nullableString);
    private _serverMode;
    /** Gets the report server mode */
    get serverMode(): nullableString;
    set serverMode(value: nullableString);
    private _serverVersion;
    /** Gets the report server version  */
    get serverVersion(): nullableString;
    set serverVersion(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Render mode for Reporting Services data source item, see {@link RVReportingServicesDataSourceItem.renderMode} property.
 */
enum RVReportingServicesRenderMode {
    /**
     * Report mode, it means the report will be exported to PDF and rendered that way
     */
    Report = 0,
    /**
     * Data mode, it means the report will be exported to CSV and that data will be used as regular input data.
     */
    Data = 1
}

/** Microsoft Reporting Services (MS SSRS) data source item */
class RVReportingServicesDataSourceItem extends RVDataSourceItem {
    private _parameters;
    constructor(dataSource: RVReportingServicesDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _path;
    /** Path to the report */
    get path(): nullableString;
    set path(value: nullableString);
    private _dynamic;
    /**  */
    get dynamic(): nullableString;
    set dynamic(value: nullableString);
    get parameters(): object;
    set parameters(value: object);
    private _renderMode;
    /**
     * Render mode, might be data or report. Data means Reveal will request the report to be exported to CSV and will use that data as regular input data.
     * Report means the report will be exported to PDF and rendered that way.
     */
    get renderMode(): RVReportingServicesRenderMode;
    set renderMode(value: RVReportingServicesRenderMode);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Abstract base class for Microsoft Analysis Services (MS SSAS) data sources
 */
abstract class RVAnalysisServicesDataSource extends RVDashboardDataSource {
    /** @hidden */
    constructor(json?: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _catalog;
    /**
    * The name of the catalog (database) to use.
    */
    get catalog(): nullableString;
    set catalog(value: nullableString);
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Microsoft Azure Analysis Services data source
 */
class RVAzureAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    getProviderKey(): string;
    private _serverUrl;
    /**
    * Server URL, including the 'asazure://' prefix (scheme).
    */
    get serverUrl(): nullableString;
    set serverUrl(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Microsoft Analysis Services (MS SSAS) HTTP connection data source
 */
class RVHttpAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _url;
    get url(): nullableString;
    /**
     * URL to the MSMDPUMP endpoint, for example: http://server/olap/msmdpump.dll
     */
    set url(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Microsoft Analysis Services (MS SSAS) TCP connection data source
 */
class RVNativeAnalysisServicesDataSource extends RVAnalysisServicesDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _host;
    /**
     * Hostname or IP address of the server
     */
    get host(): nullableString;
    set host(value: nullableString);
    private _port;
    /**
     * TCP port where the server is accepting connections, 2383 is the default port for SSAS.
     */
    get port(): number;
    set port(value: number);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Microsoft Analysis Services (MS SSAS) item, specifies the cube to get data from.
 */
class RVAnalysisServicesDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVAnalysisServicesDataSource);
    /** @hidden */
    toJson(): any;
    private _catalog;
    /**
     * The name of the catalog (database) containing the cube.
     */
    get catalog(): nullableString;
    set catalog(value: nullableString);
    private _cube;
    /**
     * Name of the cube to use
     */
    get cube(): nullableString;
    set cube(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Azure SQL Server data source
 */
class RVAzureSqlDataSource extends RVSqlServerDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Azure SQL Server data source item
 */
class RVAzureSqlDataSourceItem extends RVSqlServerDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVAzureSqlDataSource);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Azure Synapse data source
 */
class RVAzureSynapseDataSource extends RVSqlServerDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Azure Synapse data source item
 */
class RVAzureSynapseDataSourceItem extends RVSqlServerDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVAzureSynapseDataSource);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * BigQuery data source
 */
class RVBigQueryDataSource extends RVDashboardDataSource {
    private _projectId;
    /**
     * BigQuery ProjectId
     */
    get projectId(): nullableString;
    set projectId(value: nullableString);
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * BigQuery data source item
 */
class RVBigQueryDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVBigQueryDataSource);
    /** @hidden */
    toJson(): any;
    private _projectId;
    /**
     * BigQuery ProjectId
     */
    get projectId(): nullableString;
    set projectId(value: nullableString);
    private _datasetId;
    /**
     * BigQuery dataset
     */
    get datasetId(): nullableString;
    set datasetId(value: nullableString);
    private _table;
    /**
     * Name of the table (or view) to get data from
     */
    get table(): nullableString;
    set table(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** REST API data source, configures the URL to get data from, HTTP method to use and optionally headers and body to send in the request. */
class RVRESTDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the web resource, is expected to be a URL with HTTP or HTTPS scheme.
     * Parameters might be specified using the notation {parameterName}, for example: http://server/customers/{CustomerID} defines a "CustomerID" parameter
     * that must be included in the {@link RVRESTDataSourceItem.parameters} property of {@link RVRESTDataSourceItem}.
     */
    get url(): nullableString;
    set url(value: nullableString);
    private _useAnonymousAuthentication;
    private _usePreemptiveAuthentication;
    /** Boolean flag indicating if anonymous authentication should be used for this data source or credentials must be requested to the containing application. */
    get useAnonymousAuthentication(): boolean;
    set useAnonymousAuthentication(value: boolean);
    /** Boolean flag indicating if preemptive authentication should be used for this data source. */
    get usePreemptiveAuthentication(): boolean;
    set usePreemptiveAuthentication(value: boolean);
    private _method;
    /** HTTP method to use, it defaults to GET */
    get method(): nullableString;
    set method(value: nullableString);
    private _contentType;
    /** Content type of the body, only used when {@link body} is not empty */
    get contentType(): nullableString;
    set contentType(value: nullableString);
    private _body;
    /** Body to send, expected to be used only with POST and PUT methods. */
    get body(): nullableString;
    set body(value: nullableString);
    private _headers;
    /** List of headers to send in the request, each string in this list is expected to be a string in the format name=value. */
    get headers(): Array<any> | null;
    set headers(value: Array<any> | null);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** REST API data source item */
class RVRESTDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVRESTDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _parameters;
    /** Values for the parameters specified in the data source {@link RVRESTDataSource.url} property. */
    get parameters(): any;
    set parameters(value: any);
    /**
    * URL to the REST endpoint.
    * The value will be set as the URL of the item's associated {@link RVRESTDataSource} data source object.
    * @deprecated This property is deprecated and will soon be removed. Please set the Url directly on the data source instead.
    */
    get url(): nullableString;
    set url(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source object used to represent the JSON data source, there are no additional properties in this class
 * as all relevant information is specified in the {@link RVJsonDataSourceItem} object.
 */
class RVJsonDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** The data source item used to represent a dataset from a JSON file, it includes the optional parsing configuration. */
class RVJsonDataSourceItem extends RVResourceBasedDataSourceItem {
    constructor(resourceItem: RVDataSourceItem);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _config;
    /** The configuration of the JSON parser. */
    get config(): nullableString;
    set config(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * A helper object that can be used to create a configuration for a JSON data source item.
 */
class RVJsonSchemaConfigBuilder {
    _columnsConfig: Array<any>;
    _iterationDepth: number;
    constructor();
    setIterationDepth(v: number): RVJsonSchemaConfigBuilder;
    addStringField(key: string): RVJsonSchemaConfigBuilder;
    addNumericField(key: string): RVJsonSchemaConfigBuilder;
    addDateField(key: string, dateFormat: string): RVJsonSchemaConfigBuilder;
    addDateTimeField(key: string, dateFormat: string): RVJsonSchemaConfigBuilder;
    build(): string;
    /** @hidden */
    static _createColumnConfig(type: number, key: string): any;
    /** @hidden */
    static _createDateBasedColumnConfig(type: number, key: string, dateFormat: string): any;
}

/**
 * Box data source
 */
class RVBoxDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Box data source item, referencing a file in Box (box.net)
 */
class RVBoxDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _identifier;
    /**
     * Identifier of the file referenced by this item
     */
    get identifier(): nullableString;
    set identifier(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Dropbox data source
 */
class RVDropboxDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Dropbox data source item, referencing a file in Dropbox
 */
class RVDropboxDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _path;
    /**
     * Path to the file in Dropbox account
     */
    get path(): nullableString;
    set path(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** OneDrive data source */
class RVOneDriveDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
}

/** OneDrive data source item, referencing a file in OneDrive. */
class RVOneDriveDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _identifier;
    /** Identifier of the file in OneDrive. */
    get identifier(): nullableString;
    set identifier(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Dynamics CRM data source, specifies the URL to the server.
 */
class RVDynamicsCrmDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /**
     * Dynamics CRM base URL
     */
    get url(): nullableString;
    set url(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Dynamics CRM data source item
 */
class RVDynamicsCrmDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVDynamicsCrmDataSource);
    /** @hidden */
    toJson(): any;
    private _organization;
    /**
     * Name of the organization to use
     */
    get organization(): nullableString;
    set organization(value: nullableString);
    private _entity;
    /**
     * Name of the entity to use
     */
    get entity(): nullableString;
    set entity(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** OData data source, configures the URL to get data from. */
class RVODataDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the OData endpoint, is expected to be a URL with HTTP or HTTPS scheme. */
    get url(): nullableString;
    set url(value: nullableString);
    private _useAnonymousAuthentication;
    private _usePreemptiveAuthentication;
    /** Boolean flag indicating if anonymous authentication should be used for this data source or credentials must be requested to the containing application. */
    get useAnonymousAuthentication(): boolean;
    set useAnonymousAuthentication(value: boolean);
    /** Boolean flag indicating if preemptive authentication should be used for this data source. */
    get usePreemptiveAuthentication(): boolean;
    set usePreemptiveAuthentication(value: boolean);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** OData data source item, see  {@link RVODataDataSource} for more information. */
class RVODataDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVODataDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _url;
    /** URL to the OData entity set or function. */
    get url(): nullableString;
    set url(value: nullableString);
    private _entityType;
    get entityType(): nullableString;
    set entityType(value: nullableString);
    private _functionQName;
    get functionQName(): nullableString;
    set functionQName(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Google Drive data source
 */
class RVGoogleDriveDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Google Drive data source item, referencing a file in Google Drive
 */
class RVGoogleDriveDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _identifier;
    /**
     * Identifier of the file referenced by this item
     */
    get identifier(): nullableString;
    set identifier(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source object used to represent the Google sheet data source, there are no additional properties in this class
 *  as all relevant information is specified in the {@link RVGoogleSheetDataSourceItem} object.
 */
class RVGoogleSheetDataSource extends RVExcelDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * The data source item used to represent a dataset from a Google Sheet file, it includes information like the
 * name of the sheet to get data from and the range to use when loading data.
 */
class RVGoogleSheetDataSourceItem extends RVExcelDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(resourceItem: RVDataSourceItem);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Google Analytics 4 data source
 */
class RVGoogleAnalytics4DataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Google Analytics 4 data source item. */
class RVGoogleAnalytics4DataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVGoogleAnalytics4DataSource);
    /** @hidden */
    toJson(): any;
    private _accountId;
    /** Account identifier to get data from */
    get accountId(): nullableString;
    set accountId(value: nullableString);
    private _propertyId;
    /** Property identifier to get data from */
    get propertyId(): nullableString;
    set propertyId(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Google Search console data source
 */
class RVGoogleSearchConsoleDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Google Search Console data source item. */
class RVGoogleSearchConsoleDataSourceItem extends RVDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVGoogleSearchConsoleDataSource);
    /** @hidden */
    toJson(): any;
    private _siteUrl;
    /** The URL of the property as defined in Search Console */
    get siteUrl(): nullableString;
    set siteUrl(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * HubSpot data source
 */
class RVHubspotDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * HubSpot data source item, referencing a HubSpot entity.
 */
class RVHubspotDataSourceItem extends RVDataSourceItem {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _entity;
    /**
     * Entity to retrieve data from
     */
    get entity(): nullableString;
    set entity(value: nullableString);
    private _startDate;
    /**
     * Start date to use when requesting data.
     */
    get startDate(): nullableDate;
    set startDate(value: nullableDate);
    private _endDate;
    /**
     * End date to use when requesting data.
     */
    get endDate(): nullableDate;
    set endDate(value: nullableDate);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Marketo data source, configures the URL to get data from. */
class RVMarketoDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the login endpoint */
    get url(): nullableString;
    set url(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Marketo data source item, see  {@link RVMarketoDataSource} for more information. */
class RVMarketoDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVMarketoDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _url;
    /** URL to the Marketo endpoint. Must match the URL specified in the {@link RVMarketoDataSource} data source object. */
    get url(): nullableString;
    set url(value: nullableString);
    private _entity;
    /** Entity to retrieve data from */
    get entity(): nullableString;
    set entity(value: nullableString);
    private _startDate;
    /** Start date to use when requesting data. */
    get startDate(): nullableDate;
    set startDate(value: nullableDate);
    private _endDate;
    /** End date to use when requesting data. */
    get endDate(): nullableDate;
    set endDate(value: nullableDate);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** MongoDB data source */
class RVMongoDBDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _connectionString;
    /** Connection string for connecting to the MongoDB host. */
    get connectionString(): nullableString;
    set connectionString(value: nullableString);
    private _database;
    /** Database used in the MongoDB server */
    get database(): nullableString;
    set database(value: nullableString);
    private _processDataOnServerDefaultValue;
    /** Sets the default value for "Process Data on Server" option for this data source, the
     * end user can still change the value, unless {@link processDataOnServerReadOnly} is true.
     */
    get processDataOnServerDefaultValue(): boolean;
    set processDataOnServerDefaultValue(value: boolean);
    private _processDataOnServerReadOnly;
    /**
     * When set to true the user will not be allowed to change the value for "Process Data on Server" option
     * and the default value will be used.
     */
    get processDataOnServerReadOnly(): boolean;
    set processDataOnServerReadOnly(value: boolean);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** MongoDB data source item. */
class RVMongoDBDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVMongoDBDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _collection;
    /** Collection name for accessing the documents */
    get collection(): nullableString;
    set collection(value: nullableString);
    private _processDataOnServer;
    /** Configures if the "Process Data on Server" option is turned on for this item, defaults to "true" */
    get processDataOnServer(): boolean;
    set processDataOnServer(value: boolean);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * SharePoint authentication methods
 */
enum RVSharePointAuthenticationMethod {
    /**
     * Windows (NT) authentication
     */
    Windows = 0,
    /**
     * Forms based authentication
     */
    Form = 1,
    /**
     * Office 365 authentication
     */
    Office365 = 2,
    /**
     * Web based login authentication
     */
    WebLogin = 3
}

/** SharePoint data source, contains the URL to the SharePoint site to use. */
class RVSharePointDataSource extends RVDashboardDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _url;
    /** URL to the SharePoint site (or sub site) to use */
    get url(): nullableString;
    set url(value: nullableString);
    /** The authentication method to use when connecting to SharePoint */
    private _authenticationMethod;
    get authenticationMethod(): RVSharePointAuthenticationMethod;
    set authenticationMethod(value: RVSharePointAuthenticationMethod);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
    /** @hidden */
    _convertAuthenticationMethod(authMethod: RVSharePointAuthenticationMethod): any;
}

/** The base abstract class for data source items from SharePoint. */
abstract class RVBaseSharePointDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVSharePointDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    abstract getSharePointItemType(): string;
}

/** Data source item to get data from a SharePoint list */
class RVSharePointListDataSourceItem extends RVBaseSharePointDataSourceItem {
    constructor(dataSource: RVSharePointDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getSharePointItemType(): string;
    private _webUrl;
    /** URL to the site containing the list */
    get webUrl(): nullableString;
    set webUrl(value: nullableString);
    private _listUrl;
    /** URL to the list */
    get listUrl(): nullableString;
    set listUrl(value: nullableString);
    private _listName;
    /** The title of the list (not the GUID!) */
    get listName(): nullableString;
    set listName(value: nullableString);
    private _isLibrary;
    /** Is this list a document library? */
    get isLibrary(): boolean;
    set isLibrary(value: boolean);
    private _view;
    /** Name of the view to use */
    get view(): nullableString;
    set view(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Data source item to get data from a single item in a SharePoint list. */
class RVSharePointListItemDataSourceItem extends RVBaseSharePointDataSourceItem {
    constructor(dataSource: RVSharePointDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getSharePointItemType(): string;
    private _webUrl;
    /** URL to the site containing the list */
    get webUrl(): nullableString;
    set webUrl(value: nullableString);
    private _listName;
    /** Name of the list */
    get listName(): nullableString;
    set listName(value: nullableString);
    private _listItemId;
    /** Identification of the single item in the list */
    get listItemId(): nullableString;
    set listItemId(value: nullableString);
    private _listItemUrl;
    /** URL to the single item */
    get listItemUrl(): nullableString;
    set listItemUrl(value: nullableString);
    private _isFolder;
    /** Is this single item a folder? */
    get isFolder(): boolean;
    set isFolder(value: boolean);
    private _assetContentType;
    /** Content-type of the item */
    get assetContentType(): nullableString;
    set assetContentType(value: nullableString);
    private _folderRelativePath;
    /** Path relative to the folder containing the item */
    get folderRelativePath(): nullableString;
    set folderRelativePath(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Data source item to get data from people in SharePoint */
class RVSharePointPeopleDataSourceItem extends RVBaseSharePointDataSourceItem {
    constructor(dataSource: RVSharePointDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getSharePointItemType(): string;
    private _userId;
    /** Optional user id when a single user should be displayed */
    get userId(): nullableString;
    set userId(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Data source item to show information from a site (or sub site) */
class RVSharePointSiteDataSourceItem extends RVBaseSharePointDataSourceItem {
    constructor(dataSource: RVSharePointDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getSharePointItemType(): string;
    private _webUrl;
    /** URL to the site or sub site. */
    get webUrl(): nullableString;
    set webUrl(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * @hidden
 */
abstract class RVOracleDataSource extends RVSqlBasedDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _database;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Oracle data source item */
class RVOracleDataSourceItem extends RVSqlBasedDataSourceItem {
    constructor(dataSource: RVOracleDataSource);
    /** @hidden */
    constructor(json: any);
    private _procedure;
    /**
     * (Optional) name of the stored procedure or function to get data from. The function must return a ref cursor. Procedures must have at least one OUT argument of type ref cursor.
     */
    get procedure(): nullableString;
    set procedure(value: nullableString);
    private _procedureParameters;
    /**Parameters to be passed to the stored procedure, if there is such specified in {@link RVOracleDataSourceItem.procedure}. */
    get procedureParameters(): any;
    set procedureParameters(value: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Oracle data source, it adds the SID property to the base properties inherited from the abstract class RVOracleDataSource. */
class RVOracleSIDDataSource extends RVOracleDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _sID;
    get sID(): nullableString;
    set sID(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Oracle data source, it adds the Service name property to the base properties inherited from the abstract class RVOracleDataSource. */
class RVOracleServiceDataSource extends RVOracleDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _service;
    /**Service name to use when connecting to Oracle server. */
    get service(): nullableString;
    set service(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Sybase data source, it adds the database name property to the base properties inherited from the abstract class RVSqlBasedDataSource.  */
class RVSyBaseDataSource extends RVSqlBasedDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _database;
    /** Name of the database to connect to.  */
    get database(): nullableString;
    set database(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Sybase data source item */
class RVSyBaseDataSourceItem extends RVSqlBasedDataSourceItem {
    constructor(dataSource: RVSyBaseDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to. */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Snowflake data source, it adds the database name property to the base properties inherited from the abstract class RVSqlBasedDataSource.
 */
class RVSnowflakeDataSource extends RVSqlPDSDataSource {
    private _database;
    private _account;
    private _warehouse;
    private _role;
    private _schema;
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** Name of the database to connect to. */
    get database(): nullableString;
    set database(value: nullableString);
    /** Snowflake account, needed only when using WPF or .NET, not needed for Java SDK. */
    get account(): nullableString;
    set account(value: nullableString);
    /** Snowflake warehouse, it is optional. */
    get warehouse(): nullableString;
    set warehouse(value: nullableString);
    /** Snowflake role, it is optional. */
    get role(): nullableString;
    set role(value: nullableString);
    /** Snowflake schema, it is optional. */
    get schema(): nullableString;
    set schema(value: nullableString);
    getType(): string;
    _getWrapper(): any;
}

/**Snowflake data source item. */
class RVSnowflakeDataSourceItem extends RVSqlPDSDataSourceItem {
    constructor(dataSource: RVSnowflakeDataSource);
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    private _schema;
    /** Name of the schema the referenced table belongs to */
    get schema(): nullableString;
    set schema(value: nullableString);
    private _procedure;
    /** (Optional) name of the stored procedure to get data from, the procedure is expected to return a result set and might
     * have multiple parameters.
     */
    get procedure(): nullableString;
    set procedure(value: nullableString);
    private _procedureParameters;
    /** Parameters to be passed to the stored procedure, if there is such specified in {@link RVSnowflakeDataSourceItem.procedure}. */
    get procedureParameters(): any;
    set procedureParameters(value: any);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Databricks data source
 */
class RVDatabricksDataSource extends RVSqlPDSDataSource {
    constructor();
    /** @hidden */
    constructor(json: any);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    private _httpPath;
    /**
     * The partial URL corresponding to the server to connect to.
     */
    get httpPath(): nullableString;
    set httpPath(value: nullableString);
    private _database;
    /**
     * Name of the database to connect to.
     */
    get database(): nullableString;
    set database(value: nullableString);
    private _schema;
    /**
     * Name of the schema to connect to.
     */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Databricks data source item.
 */
class RVDatabricksDataSourceItem extends RVSqlPDSDataSourceItem {
    /** @hidden */
    constructor(json: any);
    constructor(dataSource: RVDatabricksDataSource);
    /** @hidden */
    toJson(): any;
    private _schema;
    /**
     * Name of the schema to get data from
     */
    get schema(): nullableString;
    set schema(value: nullableString);
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/** Elasticsearch data source item */
class RVElasticsearchDataSourceItem extends RVDataSourceItem {
    constructor(dataSource: RVElasticsearchDataSource);
    /** @hidden */
    constructor(json: any);
    private _index;
    /**
     * The name of the Elasticsearch index to query.
     */
    get index(): string | null;
    set index(value: string | null);
    private _fieldMultiValueLeniency;
    /**
     * (Optional) Controls behavior when SQL queries encounter fields with multiple values.
     * If false, an error is returned for fields containing array values.
     * If true, returns the first value from the array with no guarantee of consistent ordering.
     * Defaults to `false`.
     */
    get fieldMultiValueLeniency(): boolean | null;
    set fieldMultiValueLeniency(value: boolean | null);
    private _processDataOnServer;
    /** Configures if the "Process Data on Server" option is turned on for this item, defaults to "true" */
    get processDataOnServer(): boolean;
    set processDataOnServer(value: boolean);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}

/**
 * Elasticsearch data source
 */
class RVElasticsearchDataSource extends RVDashboardDataSource {
    private _processDataOnServerReadOnly;
    constructor();
    /** @hidden */
    constructor(json: any);
    private _certificateFingerprint;
    /**
     * (Optional) The hex-encoded SHA-256 fingerprint of the Elasticsearch CA certificate used to establish trust for SSL/TLS connections.
     */
    get certificateFingerprint(): string | null;
    set certificateFingerprint(value: string | null);
    private _nodes;
    /**
     * List of Elasticsearch node endpoints to connect to in the cluster.
     */
    get nodes(): string[] | null;
    set nodes(value: string[] | null);
    private _fieldMultiValueLeniency;
    /**
     * (Optional) Controls behavior when SQL queries encounter fields with multiple values.
     * If false, an error is returned for fields containing array values.
     * If true, returns the first value from the array with no guarantee of consistent ordering.
     * Defaults to `false`.
     */
    get fieldMultiValueLeniency(): boolean | null;
    set fieldMultiValueLeniency(value: boolean | null);
    private _processDataOnServerDefaultValue;
    /** Sets the default value for "Process Data on Server" option for this data source, the
     * end user can still change the value, unless {@link processDataOnServerReadOnly} is true.
     */
    get processDataOnServerDefaultValue(): boolean;
    set processDataOnServerDefaultValue(value: boolean);
    /** @hidden */
    toJson(): any;
    /** @hidden */
    getProviderKey(): string;
    /** @hidden */
    getType(): string;
    /** @hidden */
    _getWrapper(): any;
}}

	declare interface ig {
	SupportedLocales: typeof RevealApi.SupportedLocales;
	RVCell: typeof RevealApi.RVCell;
	RVVisualization: typeof RevealApi.RVVisualization;
	VisualizationsArray: typeof RevealApi.VisualizationsArray;
	RVDashboard: typeof RevealApi.RVDashboard;
	RVConditionalFormatting: typeof RevealApi.RVConditionalFormatting;
	RevealTheme: typeof RevealApi.RevealTheme;
	MountainDarkTheme: typeof RevealApi.MountainDarkTheme;
	MountainLightTheme: typeof RevealApi.MountainLightTheme;
	OceanDarkTheme: typeof RevealApi.OceanDarkTheme;
	OceanLightTheme: typeof RevealApi.OceanLightTheme;
	RevealView: typeof RevealApi.RevealView;
	RevealDashboardThumbnailView: typeof RevealApi.RevealDashboardThumbnailView;
	RVChartType: typeof RevealApi.RVChartType;
	RVProviderType: typeof RevealApi.RVProviderType;
	RVImage: typeof RevealApi.RVImage;
	RVImageAsset: typeof RevealApi.RVImageAsset;
	RVAssets: typeof RevealApi.RVAssets;
	RVMenuItemBase: typeof RevealApi.RVMenuItemBase;
	RVMenuSeparatorItem: typeof RevealApi.RVMenuSeparatorItem;
	RVMenuSubmenuItem: typeof RevealApi.RVMenuSubmenuItem;
	RVMenuItem: typeof RevealApi.RVMenuItem;
	RVMenuLocation: typeof RevealApi.RVMenuLocation;
	RVField: typeof RevealApi.RVField;
	RVTooltipItem: typeof RevealApi.RVTooltipItem;
	RevealSdkSettings: typeof RevealApi.RevealSdkSettings;
	VisualizationsConfiguration: typeof RevealApi.VisualizationsConfiguration;
	MapVisualizationsConfiguration: typeof RevealApi.MapVisualizationsConfiguration;
	ScatterMapVisualizationsConfiguration: typeof RevealApi.ScatterMapVisualizationsConfiguration;
	RVMapImageryType: typeof RevealApi.RVMapImageryType;
	RVDashboardFilter: typeof RevealApi.RVDashboardFilter;
	RVDateFilterType: typeof RevealApi.RVDateFilterType;
	RVDateDashboardFilter: typeof RevealApi.RVDateDashboardFilter;
	RVDateRange: typeof RevealApi.RVDateRange;
	RVDateRule: typeof RevealApi.RVDateRule;
	RVDateFilterMenuOption: typeof RevealApi.RVDateFilterMenuOption;
	RVDateFilterMenuSeparator: typeof RevealApi.RVDateFilterMenuSeparator;
	RVDateFilterMenuItem: typeof RevealApi.RVDateFilterMenuItem;
	RVPeriodRelation: typeof RevealApi.RVPeriodRelation;
	RVPeriodType: typeof RevealApi.RVPeriodType;
	RVFilterValue: typeof RevealApi.RVFilterValue;
	RevealUtility: typeof RevealApi.RevealUtility;
	RVChartSettings: typeof RevealApi.RVChartSettings;
	RVDataSourcesRequestedTriggerType: typeof RevealApi.RVDataSourcesRequestedTriggerType;
	GlobalFiltersArray: typeof RevealApi.GlobalFiltersArray;
	QuickFiltersArray: typeof RevealApi.QuickFiltersArray;
	VisualizationEditorOpeningArgs: typeof RevealApi.VisualizationEditorOpeningArgs;
	VisualizationEditorOpenedEventArgs: typeof RevealApi.VisualizationEditorOpenedEventArgs;
	TooltipShowingEventArgs: typeof RevealApi.TooltipShowingEventArgs;
	TooltipItemClickEventArgs: typeof RevealApi.TooltipItemClickEventArgs;
	DashboardSaveEventArgs: typeof RevealApi.DashboardSaveEventArgs;
	VisualizationEditorClosingArgs: typeof RevealApi.VisualizationEditorClosingArgs;
	VisualizationEditorClosedEventArgs: typeof RevealApi.VisualizationEditorClosedEventArgs;
	FilterChangedEventArgs: typeof RevealApi.FilterChangedEventArgs;
	DataSourceSelectionEventArgs: typeof RevealApi.DataSourceSelectionEventArgs;
	RVDataSourceSelection: typeof RevealApi.RVDataSourceSelection;
	VisualizationDataLoadingEventArgs: typeof RevealApi.VisualizationDataLoadingEventArgs;
	MenuOpeningEventArgs: typeof RevealApi.MenuOpeningEventArgs;
	FieldsInitializingEventArgs: typeof RevealApi.FieldsInitializingEventArgs;
	RVLocalFileDataSource: typeof RevealApi.RVLocalFileDataSource;
	RVLocalFileDataSourceItem: typeof RevealApi.RVLocalFileDataSourceItem;
	RVExcelRange: typeof RevealApi.RVExcelRange;
	RVExcelDataSource: typeof RevealApi.RVExcelDataSource;
	RVExcelDataSourceItem: typeof RevealApi.RVExcelDataSourceItem;
	RVSqlServerDataSource: typeof RevealApi.RVSqlServerDataSource;
	RVSqlServerDataSourceItem: typeof RevealApi.RVSqlServerDataSourceItem;
	RVWebResourceDataSource: typeof RevealApi.RVWebResourceDataSource;
	RVWebResourceDataSourceItem: typeof RevealApi.RVWebResourceDataSourceItem;
	RVCsvDataSource: typeof RevealApi.RVCsvDataSource;
	RVCsvDataSourceItem: typeof RevealApi.RVCsvDataSourceItem;
	RVMySqlDataSource: typeof RevealApi.RVMySqlDataSource;
	RVMySqlDataSourceItem: typeof RevealApi.RVMySqlDataSourceItem;
	RVAthenaDataSource: typeof RevealApi.RVAthenaDataSource;
	RVAthenaDataSourceItem: typeof RevealApi.RVAthenaDataSourceItem;
	RVS3DataSource: typeof RevealApi.RVS3DataSource;
	RVS3DataSourceItem: typeof RevealApi.RVS3DataSourceItem;
	RVQuickBooksDataSource: typeof RevealApi.RVQuickBooksDataSource;
	RVQuickBooksDataSourceItem: typeof RevealApi.RVQuickBooksDataSourceItem;
	RVInMemoryDataSource: typeof RevealApi.RVInMemoryDataSource;
	RVInMemoryDataSourceItem: typeof RevealApi.RVInMemoryDataSourceItem;
	RVPostgresDataSource: typeof RevealApi.RVPostgresDataSource;
	RVPostgresDataSourceItem: typeof RevealApi.RVPostgresDataSourceItem;
	RVRedshiftDataSource: typeof RevealApi.RVRedshiftDataSource;
	RVRedshiftDataSourceItem: typeof RevealApi.RVRedshiftDataSourceItem;
	RVCubeDevDataSource: typeof RevealApi.RVCubeDevDataSource;
	RVCubeDevDataSourceItem: typeof RevealApi.RVCubeDevDataSourceItem;
	RVReportingServicesDataSource: typeof RevealApi.RVReportingServicesDataSource;
	RVReportingServicesDataSourceItem: typeof RevealApi.RVReportingServicesDataSourceItem;
	RVReportingServicesRenderMode: typeof RevealApi.RVReportingServicesRenderMode;
	RVAzureAnalysisServicesDataSource: typeof RevealApi.RVAzureAnalysisServicesDataSource;
	RVHttpAnalysisServicesDataSource: typeof RevealApi.RVHttpAnalysisServicesDataSource;
	RVNativeAnalysisServicesDataSource: typeof RevealApi.RVNativeAnalysisServicesDataSource;
	RVAnalysisServicesDataSourceItem: typeof RevealApi.RVAnalysisServicesDataSourceItem;
	RVAzureSqlDataSource: typeof RevealApi.RVAzureSqlDataSource;
	RVAzureSqlDataSourceItem: typeof RevealApi.RVAzureSqlDataSourceItem;
	RVAzureSynapseDataSource: typeof RevealApi.RVAzureSynapseDataSource;
	RVAzureSynapseDataSourceItem: typeof RevealApi.RVAzureSynapseDataSourceItem;
	RVBigQueryDataSource: typeof RevealApi.RVBigQueryDataSource;
	RVBigQueryDataSourceItem: typeof RevealApi.RVBigQueryDataSourceItem;
	RVRESTDataSource: typeof RevealApi.RVRESTDataSource;
	RVRESTDataSourceItem: typeof RevealApi.RVRESTDataSourceItem;
	RVJsonDataSource: typeof RevealApi.RVJsonDataSource;
	RVJsonDataSourceItem: typeof RevealApi.RVJsonDataSourceItem;
	RVJsonSchemaConfigBuilder: typeof RevealApi.RVJsonSchemaConfigBuilder;
	RVBoxDataSource: typeof RevealApi.RVBoxDataSource;
	RVBoxDataSourceItem: typeof RevealApi.RVBoxDataSourceItem;
	RVDropboxDataSource: typeof RevealApi.RVDropboxDataSource;
	RVDropboxDataSourceItem: typeof RevealApi.RVDropboxDataSourceItem;
	RVOneDriveDataSource: typeof RevealApi.RVOneDriveDataSource;
	RVOneDriveDataSourceItem: typeof RevealApi.RVOneDriveDataSourceItem;
	RVDynamicsCrmDataSource: typeof RevealApi.RVDynamicsCrmDataSource;
	RVDynamicsCrmDataSourceItem: typeof RevealApi.RVDynamicsCrmDataSourceItem;
	RVODataDataSource: typeof RevealApi.RVODataDataSource;
	RVODataDataSourceItem: typeof RevealApi.RVODataDataSourceItem;
	RVGoogleDriveDataSource: typeof RevealApi.RVGoogleDriveDataSource;
	RVGoogleDriveDataSourceItem: typeof RevealApi.RVGoogleDriveDataSourceItem;
	RVGoogleSheetDataSource: typeof RevealApi.RVGoogleSheetDataSource;
	RVGoogleSheetDataSourceItem: typeof RevealApi.RVGoogleSheetDataSourceItem;
	RVGoogleAnalytics4DataSource: typeof RevealApi.RVGoogleAnalytics4DataSource;
	RVGoogleAnalytics4DataSourceItem: typeof RevealApi.RVGoogleAnalytics4DataSourceItem;
	RVGoogleSearchConsoleDataSource: typeof RevealApi.RVGoogleSearchConsoleDataSource;
	RVGoogleSearchConsoleDataSourceItem: typeof RevealApi.RVGoogleSearchConsoleDataSourceItem;
	RVHubspotDataSource: typeof RevealApi.RVHubspotDataSource;
	RVHubspotDataSourceItem: typeof RevealApi.RVHubspotDataSourceItem;
	RVMarketoDataSource: typeof RevealApi.RVMarketoDataSource;
	RVMarketoDataSourceItem: typeof RevealApi.RVMarketoDataSourceItem;
	RVMongoDBDataSource: typeof RevealApi.RVMongoDBDataSource;
	RVMongoDBDataSourceItem: typeof RevealApi.RVMongoDBDataSourceItem;
	RVSharePointDataSource: typeof RevealApi.RVSharePointDataSource;
	RVSharePointAuthenticationMethod: typeof RevealApi.RVSharePointAuthenticationMethod;
	RVSharePointListDataSourceItem: typeof RevealApi.RVSharePointListDataSourceItem;
	RVSharePointListItemDataSourceItem: typeof RevealApi.RVSharePointListItemDataSourceItem;
	RVSharePointPeopleDataSourceItem: typeof RevealApi.RVSharePointPeopleDataSourceItem;
	RVSharePointSiteDataSourceItem: typeof RevealApi.RVSharePointSiteDataSourceItem;
	RVOracleDataSource: typeof RevealApi.RVOracleDataSource;
	RVOracleDataSourceItem: typeof RevealApi.RVOracleDataSourceItem;
	RVOracleSIDDataSource: typeof RevealApi.RVOracleSIDDataSource;
	RVOracleServiceDataSource: typeof RevealApi.RVOracleServiceDataSource;
	RVSyBaseDataSource: typeof RevealApi.RVSyBaseDataSource;
	RVSyBaseDataSourceItem: typeof RevealApi.RVSyBaseDataSourceItem;
	RVSnowflakeDataSource: typeof RevealApi.RVSnowflakeDataSource;
	RVSnowflakeDataSourceItem: typeof RevealApi.RVSnowflakeDataSourceItem;
	RVDatabricksDataSource: typeof RevealApi.RVDatabricksDataSource;
	RVDatabricksDataSourceItem: typeof RevealApi.RVDatabricksDataSourceItem;
	RVElasticsearchDataSource: typeof RevealApi.RVElasticsearchDataSource;
	RVElasticsearchDataSourceItem: typeof RevealApi.RVElasticsearchDataSourceItem;
	RevealDataSources: typeof RevealApi.RevealDataSources;
	RVLocalizationContext: typeof RevealApi.RVLocalizationContext;
	RVFormattingContext: typeof RevealApi.RVFormattingContext;
	RVLocalizationElementType: typeof RevealApi.RVLocalizationElementType;
	RVDashboardAggregationType: typeof RevealApi.RVDashboardAggregationType;
	RVLocalizationElement: typeof RevealApi.RVLocalizationElement;
	RVTitleElement: typeof RevealApi.RVTitleElement;
	RVDashboardTitleElement: typeof RevealApi.RVDashboardTitleElement;
	RVVisualizationTitleElement: typeof RevealApi.RVVisualizationTitleElement;
	RVDashboardFilterTitleElement: typeof RevealApi.RVDashboardFilterTitleElement;
	RVFieldLabelElementBase: typeof RevealApi.RVFieldLabelElementBase;
	RVFieldLabelElement: typeof RevealApi.RVFieldLabelElement;
	RVVisualizationFieldLabelElement: typeof RevealApi.RVVisualizationFieldLabelElement;
	RVDashboardDataType: typeof RevealApi.RVDashboardDataType;
	RVFieldFormattingDescriptor: typeof RevealApi.RVFieldFormattingDescriptor;
	RVFormattingSpec: typeof RevealApi.RVFormattingSpec;
	RVDateFormattingSpec: typeof RevealApi.RVDateFormattingSpec;
	RVNumberFormattingSpec: typeof RevealApi.RVNumberFormattingSpec;
	RVDashboardNumberFormattingType: typeof RevealApi.RVDashboardNumberFormattingType;
	RVDashboardNegativeFormatType: typeof RevealApi.RVDashboardNegativeFormatType;
	RVDashboardDateAggregationType: typeof RevealApi.RVDashboardDateAggregationType;
}

declare interface JQueryStaticIG extends JQueryStatic {
	ig: ig;
}

declare let $: JQueryStaticIG;