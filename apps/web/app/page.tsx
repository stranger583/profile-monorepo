import { Card, CardHeader, CardContent } from "@repo/ui/card";
import { Section } from "@repo/ui/section"
import "@repo/ui/styles.css";
import "./globals.css";

export default function Home() {
  return (
      <main className="flex justify-between mx-4 gap-6">
        <Section className="w-[360px]">
          <Card>
            <CardHeader>Tools </CardHeader>
            <CardContent>lin1</CardContent>
          </Card>
        </Section>
        <Section className="w-[720px]">
          <Card>
            <CardHeader>Tools </CardHeader>
            <CardContent>lin1</CardContent>
          </Card>
        </Section>
        <Section className="w-[360px]">
          <Card>
            <CardHeader>Tools </CardHeader>
            <CardContent>lin1</CardContent>
          </Card>
        </Section>
      </main>
  );
}
