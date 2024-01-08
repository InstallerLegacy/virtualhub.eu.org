---
keywords: ["Unix", "Unix v1", "PDP-11", SIMH, 1970s, 1971]
image: ./unix-v1-SIMH-4.webp
description: "Sadly, we do not have a complete copy of ! Unix v1, but we do have a copy with v1 kernel and v2 userland, which we can run on SIMH."
sidebar_position: 1
sidebar_label: "! Unix v1 on SIMH"
---

# How to install ! Unix v1 on SIMH?

![SIMH PDP-11 emulator with ! Unix v1](./unix-v1-SIMH-4.webp)

Sadly, we do not have a complete copy of [! Unix v1](/1970s/1971/unix-v1), but we do have a copy with v1 kernel and v2 userland, which we can run on SIMH. We will refer to that copy as Unix v1 from now on. First, we need to download the ! Unix-v1 kit.

## Downloads

You can download the kit needed to run ! Unix-v1 on the SIMH PDP-11 emulator from the [Google Code archive of the project which recreated the image](https://code.google.com/archive/p/unix-jun72/):

- [! Unix-v1 kit](https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/unix-jun72/images-20080625.tgz)

If you are on Windows, you may need to install additional software such as [7-Zip](https://www.7-zip.org/) to extract the kit.

## Using ! Unix-v1

:::tip

If you have not already installed SIMH PDP-11 emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-pdp11/) on Linux and Windows.

:::

Extract the kit you downloaded. Inside you will find several files. Create a folder somewhere to store the files for this VM and move the files named `m792low.load`, `rf0.dsk`, `rfk.dsk` and `tape` into it.

Now we will create a config file for our VM. Create a text file called `pdp11.ini` with the following content in the VM folder:

```ini
set cpu 11/20
set cpu 32K
set rk0 enabled
att rk0 rk0.dsk
set rf 2p
set rf enabled
att rf rf0.dsk
set tc enabled
att tc tape
set hk disabled
set tm disabled
set rx disabled
set rl disabled
set tq disabled
set tc enabled
set rf enabled
set ke enabled
set dci en
set dci lines=8
set dco 7b
load m792low.load
dep system sr 173700
go 73700
```

![pdp11.ini](./unix-v1-SIMH-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
pdp11
```

![pdp11](./unix-v1-SIMH-2.webp)

After the emulator starts, you will be asked to log in. Type `root` and press enter to log in. There is no password.

![! Unix-v1 login](./unix-v1-SIMH-3.webp)

You can now run `ls` to see the list of files. To change directory, you need to use the `chdir` command, `cd` is not available.

![! Unix-v1 list of files in root.](./unix-v1-SIMH-4.webp)

That's it! We used ! Unix-v1. We can create a shell script to make it easy to launch the VM. Create a file called `unix-v1.sh` with the following content:

```bash
#!/bin/bash
pdp11
```

Now make the file executable:

```bash
chmod +x unix-v1.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1970s/1971/unix-v1/#manuals) on the [main ! Unix-v1 page](/1970s/1971/unix-v1) to learn how to use it.

### Windows

:::tip

You should use Linux. If you don’t know how to install a Linux distro, see [our tutorials on how to install Kubuntu](https://setup.virtualhub.eu.org/tag/os/), a beginner-friendly distro.

:::

On Windows, you need to place the `PDP11.exe` file you downloaded in [this tutorial](https://setup.virtualhub.eu.org/simh-pdp11#windows) in the VM folder. Then you can follow the above tutorial as usual. The shell script will not work on Windows. You need to rename it to `unix-v1.bat`. Then you can double-click the file to launch the VM, no need to make it executable.

## Credits

- The disk image and other files used above are from a kit available on the [Google Code archive of the project which recreated the image](https://code.google.com/archive/p/unix-jun72/).

## Video tutorial

Do you want to follow the tutorial by watching a video? We will post a video on our [YouTube channel](https://www.youtube.com/@virtua1hub) soon.

Archives of this tutorial are available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1970s/1971/unix-v1/simh/).
