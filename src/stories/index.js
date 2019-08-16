import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import NewInterviewView from '../components/InterviewsView/NewInterviewDetails/InterviewDetails';

const candidate = {
    id: 229,
    firstname: "vcbyyu",
    lastname: "zxaeer",
    level: "MIDDLE",
    location: "BREST",
    skills: "",
    comment: "",
    startDate: null,
    active: true,
    candidateStatus: "IN_REVIEW"
}

const interviewers = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('modal', () => (
        <NewInterviewView interviewers={interviewers} candidate={candidate}/>
    ));