"use client";

import { useState } from "react";
import { Button, Field, Flex, Input, Text } from "@chakra-ui/react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    // Connect to your email marketing provider here.
    setStatus("done");
    event.currentTarget.reset();
  }

  if (status === "done") {
    return (
      <Text role="status" fontWeight="700" color="gold.300">
        Thank you for subscribing to FootballCoin Academy updates!
      </Text>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field.Root invalid={status === "error"}>
        <Field.Label srOnly>Email address</Field.Label>
        <Flex w="full" gap={3} direction={{ base: "column", sm: "row" }}>
          <Input name="email" type="email" autoComplete="email" placeholder="Your email address" size="lg" bg="white" color="ink" borderColor="transparent" onChange={() => status === "error" && setStatus("idle")} />
          <Button type="submit" size="lg" colorPalette="gold" fontWeight="700" flexShrink={0} _hover={{ bg: "gold.300" }}>
            Subscribe
          </Button>
        </Flex>
        <Field.ErrorText color="gold.200">Please enter a valid email address.</Field.ErrorText>
      </Field.Root>
    </form>
  );
}
