---
title: Leviathan CTF Solutions
date: '2021-09-04T15:52:14Z'
description: 'Solutions to the Leviathan WarGame hosted at overthewire.org'
---

## Leviathan CTF Solutions: Preface

This is a writeup of the wargame Leviathan hosted on overthewire.org. Despite the authors requests I uploaded the solutions onto the internet. I mean no disrespect in doing so and encourage you to try your best to solve these by yourself. My intentions of this writeup is to present how I approached the problem. Referring to other peoples solutions after having attempted it myself have provided me with further insight as to how these problems can be tackled and I believe it is a useful learning resource.

## Leviathan Level 1 Solution:

The directory was hidden so I ran a more detailed directory listing
```bash
leviathan0@leviathan:~$ ls -la
total 24
drwxr-xr-x  3 root       root       4096 Aug 26  2019 .
drwxr-xr-x 10 root       root       4096 Aug 26  2019 ..
drwxr-x---  2 leviathan1 leviathan0 4096 Aug 26  2019 .backup
-rw-r--r--  1 root       root        220 May 15  2017 .bash_logout
-rw-r--r--  1 root       root       3526 May 15  2017 .bashrc
-rw-r--r--  1 root       root        675 May 15  2017 .profile

```
We enter the hidden directory and are greeted with a file.
```bash
leviathan0@leviathan:~/.backup$ ls
bookmarks.html
```
It is an html so I search the document for any references of 'password'
```bash
leviathan0@leviathan:~/.backup$ grep -rnw -e 'password'
bookmarks.html:1049:<DT><A HREF="http://leviathan.labs.overthewire.org/passwordus.html | This will be fixed later, the password for leviathan1 is rioGegei8m" ADD_DATE="1155384634" LAST_CHARSET="ISO-8859-1" ID="rdf:#$2wIU71">password to leviathan1</A>
```
## Leviathan Level 2 Solution:
I run the program and it asks for a password.
```bash
leviathan1@leviathan:~$ ./check
password: aaaa
Wrong password, Good Bye ...
```
I then ran the program using ltrace as the password is likely comparing itself against another value which we would be able to see in the strcmp() function call. We can see that the string 'sex' is being compared with user input. Thus, the password is sex.

```bash
leviathan1@leviathan:~$ ltrace ./check
__libc_start_main(0x804853b, 1, 0xffffd794, 0x8048610 <unfinished ...>
printf("password: ")                                     = 10
getchar(1, 0, 0x65766f6c, 0x646f6700password: aaaa
)                    = 97
getchar(1, 0, 0x65766f6c, 0x646f6700)                    = 97
getchar(1, 0, 0x65766f6c, 0x646f6700)                    = 97
strcmp("aaa", "sex")                                     = -1
puts("Wrong password, Good Bye ..."Wrong password, Good Bye ...
)                     = 29
+++ exited (status 0) +++
```
The password is entered, we confirm our user and use cat to print the password.
```bash
leviathan1@leviathan:~$ ./check
password: sex
$ whoami
leviathan2
$ cat /etc/leviathan_pass/leviathan2
ougahZi8Ta
```
## Leviathan Level 3 Solution:
In progress...
