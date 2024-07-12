import { chartData } from '@/data';
import React from 'react';
import Chart from 'react-apexcharts';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const BarChartComponent = ({ color, chart, title, description, footer }) => {
    const options = {
        chart: {
            id: 'basic-bar',
            toolbar: {
                show: false // Hides the toolbar
            }
        },
        xaxis: {
            categories: chartData.labels,
            labels: {
                show: false
                // rotate: -45,
                // style: {
                //     fontSize: '12px',
                //     fontWeight: 400,
                //     cssClass: 'apexcharts-xaxis-label',
                // }
            }
        },
        yaxis: {
            title: {
                text: 'Average SBW',
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: true,
            theme: 'light'
        }
    };

    const series = [{
        name: 'Average SBW',
        data: chartData.datasets[0].data
    }];

    return (
        <Card className="border border-blue-gray-100 shadow-sm">
            <CardHeader variant="gradient" floated={false} shadow={false}>
                <Chart options={options} series={series} type="bar" height={400} />
            </CardHeader>
            <CardBody className="px-6 pt-0">
                <Typography variant="h6" color="blue-gray">
                    {title}
                </Typography>
                <Typography variant="small" className="font-normal text-blue-gray-600">
                    {description}
                </Typography>
            </CardBody>
            {footer && (
                <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
                    {footer}
                </CardFooter>
            )}
        </Card>
        // <div className="bar-chart">
        //     <Chart options={options} series={series} type="bar" height={400} />
        // </div>
    );
};


BarChartComponent.defaultProps = {
    color: "blue",
    footer: null,
};

BarChartComponent.propTypes = {
    color: PropTypes.oneOf([
        "white",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
    ]),
    chart: PropTypes.object.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

BarChartComponent.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default BarChartComponent;
