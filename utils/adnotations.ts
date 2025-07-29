import test from "../tests/test";

type TestStep = "Given" | "When" | "Then" | "And";

export default class AnnotateUtils {
    readonly test: typeof test;

    constructor(test: typeof this.test) {
        this.test = test;
    }

    annotate(step: TestStep, annotation: string): string {
        this.test.info().annotations.push({
            type: `${step} ${annotation}`,
        });

        this.test.step(`${step}: ${annotation}`, async () => {
        });

        return `${step} ${annotation}`;
    }
}

const gherkin = new AnnotateUtils(test);

export function Given(annotation: string): string {
    return gherkin.annotate("Given", annotation);
}

export function When(annotation: string): string {
    return gherkin.annotate("When", annotation);
}

export function Then(annotation: string): string {
    return gherkin.annotate("Then", annotation);
}

export function And(annotation: string): string {
    return gherkin.annotate("And", annotation);
}
