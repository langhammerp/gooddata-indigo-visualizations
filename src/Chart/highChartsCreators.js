import { merge, get } from 'lodash';
import {
    DEFAULT_SERIES_LIMIT,
    DEFAULT_CATEGORIES_LIMIT,
    getCommonConfiguration
} from './highcharts/commonConfiguration';
import { getLineConfiguration } from './highcharts/lineConfiguration';
import { getBarConfiguration } from './highcharts/barConfiguration';
import { getColumnConfiguration } from './highcharts/columnConfiguration';
import { getCustomizedConfiguration } from './highcharts/customConfiguration';
import { getPieConfiguration } from './highcharts/pieConfiguration';

export function getLineChartConfiguration(chartOptions, afm) {
    return merge({},
        getCommonConfiguration(chartOptions, afm),
        getLineConfiguration(),
        getCustomizedConfiguration(chartOptions)
    );
}

export function getColumnChartConfiguration(chartOptions, afm) {
    return merge({},
        getCommonConfiguration(chartOptions, afm),
        getColumnConfiguration(),
        getCustomizedConfiguration(chartOptions)
    );
}

export function getBarChartConfiguration(chartOptions, afm) {
    return merge({},
        getCommonConfiguration(chartOptions, afm),
        getBarConfiguration(),
        getCustomizedConfiguration(chartOptions)
    );
}

export function getPieChartConfiguration(chartOptions, afm) {
    return merge({},
        getCommonConfiguration(chartOptions, afm),
        getPieConfiguration(),
        getCustomizedConfiguration(chartOptions)
    );
}

export function isDataOfReasonableSize(chartData, limits) {
    const seriesLimit = get(limits, 'series', DEFAULT_SERIES_LIMIT);
    const categoriesLimit = get(limits, 'categories', DEFAULT_CATEGORIES_LIMIT);

    return chartData.series.length <= seriesLimit &&
        chartData.categories.length <= categoriesLimit;
}
