import { configure } from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/components/InterviewsView/InterviewDetails/InterviewDetails.module.css'

function loadStories() {
    require("../src/stories");
}

configure(loadStories, module);