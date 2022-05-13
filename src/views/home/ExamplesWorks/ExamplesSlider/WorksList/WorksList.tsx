import { makeStyles } from '@material-ui/core';

import { WorksItem } from './WorksItem';

import type { ExampleWorkWorks } from '../contants';

interface WorksListProps {
    works: ExampleWorkWorks;
}

const useStyles = makeStyles(() => ({
    worksList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingInlineStart: 0,
    },
}));

export const WorksList = ({ works }: WorksListProps) => {
    const classes = useStyles();

    return (
        <ul className={classes.worksList}>
            {works.map((work) => (
                <WorksItem key={work}>{work}</WorksItem>
            ))}
        </ul>
    );
};
