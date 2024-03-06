import { getInput, setFailed, setOutput } from "@actions/core";
import { remark } from "remark";
import strip from "strip-markdown";

try {
  const content = getInput("content");
  const result = await remark().use(strip).process(content);
  setOutput("content", String(result));
} catch (err) {
  setFailed(err.message);
}
