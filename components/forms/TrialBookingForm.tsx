"use client";

import { useState } from "react";
import { Box, Button, Checkbox, Field, Heading, Input, NativeSelect, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";

type FieldName = "parentName" | "email" | "phone" | "playerName" | "ageGroup" | "programme" | "consent";
type Errors = Partial<Record<FieldName, string>>;

const AGE_GROUPS = ["4–6 (Mini Kickers)", "7–9 (Foundation)", "10–12 (Development)", "13–16 (Youth)", "16–18 (Performance)"];
const PROGRAMMES = ["Weekly Training", "Holiday Camps", "1-to-1 Coaching", "Elite Performance assessment", "Goalkeeper Training", "Girls’ football", "Schools Programme (for schools)", "Not sure — please advise"];
const VENUES = ["Parkside Sports Centre", "St Anne's Academy", "No preference"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{9,}$/;

function validate(data: FormData, consent: boolean): Errors {
  const value = (name: string) => String(data.get(name) ?? "").trim();
  const errors: Errors = {};
  if (!value("parentName")) errors.parentName = "Please enter your name.";
  if (!EMAIL_PATTERN.test(value("email"))) errors.email = "Please enter a valid email address.";
  if (!PHONE_PATTERN.test(value("phone"))) errors.phone = "Please enter a valid UK phone number.";
  if (!value("playerName")) errors.playerName = "Please enter the player’s first name.";
  if (!value("ageGroup")) errors.ageGroup = "Please choose an age group.";
  if (!value("programme")) errors.programme = "Please choose a programme.";
  if (!consent) errors.consent = "Please confirm you agree to be contacted.";
  return errors;
}

export function TrialBookingForm({ defaultProgramme = "" }: { defaultProgramme?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = validate(data, consent);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    // Connect to your CRM, booking system or email API here.
    setSubmittedName(String(data.get("playerName")));
  }

  const clearError = (name: FieldName) => errors[name] && setErrors((current) => ({ ...current, [name]: undefined }));

  if (submittedName) {
    return (
      <Box role="status" textAlign="center" py={10} px={6}>
        <Box color="pitch.600" display="inline-flex" aria-hidden="true">
          <CheckCircle2 size={56} />
        </Box>
        <Heading as="h3" mt={4} fontSize="3xl" textTransform="uppercase" fontWeight="800" color="navy.950">
          Trial request received
        </Heading>
        <Text mt={3} color="muted" lineHeight="1.7" maxW="440px" mx="auto">
          Thanks — we’re looking forward to meeting {submittedName}. A member of our team will call or email within one working day to confirm the session time and venue.
        </Text>
        <Button mt={6} variant="outline" color="navy.950" onClick={() => setSubmittedName(null)}>
          Book another player
        </Button>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Book a free trial">
      <Stack gap={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
          <Field.Root invalid={!!errors.parentName} required>
            <Field.Label>
              Parent / guardian name <Field.RequiredIndicator />
            </Field.Label>
            <Input name="parentName" autoComplete="name" size="lg" onChange={() => clearError("parentName")} />
            <Field.ErrorText>{errors.parentName}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.email} required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input name="email" type="email" autoComplete="email" size="lg" onChange={() => clearError("email")} />
            <Field.ErrorText>{errors.email}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.phone} required>
            <Field.Label>
              Phone <Field.RequiredIndicator />
            </Field.Label>
            <Input name="phone" type="tel" autoComplete="tel" size="lg" onChange={() => clearError("phone")} />
            <Field.ErrorText>{errors.phone}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.playerName} required>
            <Field.Label>
              Player’s first name <Field.RequiredIndicator />
            </Field.Label>
            <Input name="playerName" size="lg" onChange={() => clearError("playerName")} />
            <Field.ErrorText>{errors.playerName}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.ageGroup} required>
            <Field.Label>
              Age group <Field.RequiredIndicator />
            </Field.Label>
            <NativeSelect.Root size="lg">
              <NativeSelect.Field name="ageGroup" defaultValue="" onChange={() => clearError("ageGroup")}>
                <option value="" disabled>
                  Select age group
                </option>
                {AGE_GROUPS.map((group) => (
                  <option key={group}>{group}</option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Field.ErrorText>{errors.ageGroup}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.programme} required>
            <Field.Label>
              Programme <Field.RequiredIndicator />
            </Field.Label>
            <NativeSelect.Root size="lg">
              <NativeSelect.Field name="programme" defaultValue={PROGRAMMES.includes(defaultProgramme) ? defaultProgramme : ""} onChange={() => clearError("programme")}>
                <option value="" disabled>
                  Select programme
                </option>
                {PROGRAMMES.map((programme) => (
                  <option key={programme}>{programme}</option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Field.ErrorText>{errors.programme}</Field.ErrorText>
          </Field.Root>
        </SimpleGrid>

        <Field.Root>
          <Field.Label>Preferred venue</Field.Label>
          <NativeSelect.Root size="lg">
            <NativeSelect.Field name="venue" defaultValue="No preference">
              {VENUES.map((venue) => (
                <option key={venue}>{venue}</option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Anything we should know?</Field.Label>
          <Textarea name="message" rows={4} placeholder="Current club, experience, medical or additional needs, preferred days…" />
        </Field.Root>

        <Field.Root invalid={!!errors.consent}>
          <Checkbox.Root
            checked={consent}
            onCheckedChange={(details) => {
              setConsent(details.checked === true);
              clearError("consent");
            }}
            colorPalette="pitch"
            alignItems="flex-start"
          >
            <Checkbox.HiddenInput name="consent" />
            <Checkbox.Control mt="2px" />
            <Checkbox.Label fontWeight="normal" color="muted" lineHeight="1.6">
              I agree to FootballCoin Academy contacting me about this trial. We never share your details. See our privacy policy.
            </Checkbox.Label>
          </Checkbox.Root>
          <Field.ErrorText>{errors.consent}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" colorPalette="pitch" size="xl" fontWeight="700" _hover={{ bg: "pitch.700" }}>
          Request my free trial
        </Button>
      </Stack>
    </form>
  );
}
