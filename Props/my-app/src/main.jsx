import React from "react";
import { createRoot } from "react-dom/client";
import { Roots } from "./Roots";

import './index.scss'

const root = createRoot(document.getElementById('root'));

root.render(<Roots />);