"use client";

import { contactSchema } from "@/lib/validation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: "",
      email: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true);
    const tgBot = process.env.NEXT_PUBLIC_TG_BOT_API!;
    const tgChatID = process.env.NEXT_PUBLIC_TG_CHAT_ID!;

    const promise = fetch(`https://api.telegram.org/bot${tgBot}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: tgChatID,
        text: `
        Name: ${values.name}: 
        email: ${values.email}, 
        message: ${values.message}
        `,
      }),
    })
      .then(() => form.reset())
      .finally(() => setIsLoading(false));
    toast.promise(promise, {
      loading: "Loading...",
      success: "Successfully sent",
      error: "Something went wrong",
    });
  }

  return (
    <>
      <Fade direction="up" triggerOnce={true}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="h-32 resize-none"
                      placeholder="Ask question or just say Hi"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your name here"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-fit"
              size={"lg"}
              type="submit"
              disabled={isLoading}
            >
              <span>Send</span>
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </Fade>
    </>
  );
};

export default ContactForm;
