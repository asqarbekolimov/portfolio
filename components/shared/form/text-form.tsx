'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';

const token = process.env.NEXT_PUBLIC_TOKEN;
const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

const TextForm = () => {
  const { t } = useTranslation();
  const formValidation = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const data = `Ism: ${values.username}, email: ${values.email}, message :${values.message}`;
      const sentData = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${data}`,
      );
      console.log(sentData);
      if (sentData.ok) {
        toast({
          title: 'Successful',
          description: 'Your message has been sent successfully',
          variant: 'default',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.log(error);
    }

    formValidation.reset();
  };
  return (
    <Fade
      className="w-full rounded-md border px-5 py-5 shadow-xl md:w-1/2 dark:bg-slate-950/25"
      direction="up"
      triggerOnce={true}
    >
      <Form {...formValidation}>
        <form
          onSubmit={formValidation.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={formValidation.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('your_name', { ns: 'index' })}</FormLabel>
                <FormControl>
                  <Input placeholder={t('name', { ns: 'index' })} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formValidation.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email', { ns: 'index' })}</FormLabel>
                <FormControl>
                  <Input placeholder="user@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formValidation.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('message', { ns: 'index' })}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('enter_msg', { ns: 'index' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{t('submit', { ns: 'index' })}</Button>
        </form>
      </Form>
    </Fade>
  );
};

export default TextForm;
