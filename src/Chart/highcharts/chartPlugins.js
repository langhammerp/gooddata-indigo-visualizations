import autohideLabels from './plugins/autohideLabels/autohideLabels';
import { extendDataLabelColors } from './plugins/dataLabelsColors';
import { applyPointHaloOptions } from './plugins/pointHalo';

const extendRenderStackTotals = (Highcharts) => {
    Highcharts.wrap(Highcharts.Axis.prototype, 'renderStackTotals', function(proceed) { // eslint-disable-line
        const axis = this;
        const { chart, stackTotalGroup } = axis;
        const { renderer } = chart;
        /* We override renderStackTotals method to render "stack-labels" directly with desired
         * visibility to prevent blinking of data labels while resizing. In Highcharts it's
         * by default:
         *     visibility: VISIBLE,
         */
        const defaultVisibility = chart.userOptions.stackLabelsVisibility || 'visible';

        if (!stackTotalGroup) {
            axis.stackTotalGroup =
                renderer.g('stack-labels')
                    .attr({
                        visibility: defaultVisibility,
                        zIndex: 6
                    })
                    .add();
        }
        proceed.call(this);
    });
};

export function initChartPlugins(Highcharts) {
    extendRenderStackTotals(Highcharts);
    autohideLabels(Highcharts);
    extendDataLabelColors(Highcharts);
    applyPointHaloOptions(Highcharts);
}
