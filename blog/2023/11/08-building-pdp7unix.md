---
title: "Building ! PDP7 Unix images yourself"
description: In this post, we will see how you can build ! PDP7 UNIX system images yourself from the source from the preservation repository."
slug: building-pdp7-unix-images-yourself
authors: legacyinstaller
tags: [unix, 1970s]
image: ./img/make.webp
keyword: [pdp7, unix, 1970, 1970s, virtualhub]
---

As promised in the [tutorial on how to use ! PDP 7 Unix on SIMH](/1970s/1970/pdp7unix/simh/), in this post, we will see how you can build ! PDP7 UNIX system images yourself from the source from the original [project to resurrect Unix on the PDP-7 from a scan of the original assembly code](https://github.com/DoctorWkt/pdp7-unix).

<!-- truncate -->

This post assumes that you are running a Linux distribution. If you have not installed Linux yet, see [our tutorials on how to install Kubuntu, a beginner-friendly distro](https://setup.virtualhub.eu.org/tag/os/). If you really want to use Windows, you can use [WSL](https://learn.microsoft.com/en-us/windows/wsl/) to follow this tutorial.

First, we need to install some tools and dependencies to build it. On Ubuntu/Debian based distros, run the following command:

```bash
sudo apt install git make perl gcc libdatetime-perl
```

On Fedora and related distros, run:

```bash
sudo dnf install git make perl gcc perl-DateTime
```

On openSUSE and related distros, run:

```bash
sudo zypper in git make perl gcc perl-DateTime
```

On Arch based distros, run:

```bash
sudo pacman -S git make perl gcc perl-datetime
```

Now, move to the Downloads folder and clone the [pdp7-unix](https://github.com/DoctorWkt/pdp7-unix) repository:

```bash
cd ~/Downloads
git clone https://github.com/DoctorWkt/pdp7-unix.git
```

![Cloning the project site](./img/clone.webp)

Move to the `pdp7-unix` folder:

```bash
cd pdp7-unix
```

Run the following command to start making the images:

```bash
make binaries
```

![Making the images](./img/make.webp)

After the command has completed, you will find files called `boot.rim` and `image.fs` in the `binaries` folder. Copy them somewhere and use them when asked in the [tutorial on how to use ! PDP 7 Unix on SIMH](/1970s/1970/pdp7unix/simh/).
