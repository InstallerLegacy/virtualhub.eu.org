---
keywords: ["Unix v1", "Unix", "PDP-11", "SIMH", 1970s, 1973]
image: ./unix-v4-SIMH-5.webp
description: "Sadly, we do not have a complete copy of Unix v4, but we do have a copy of a kernel that is from between v3 and v4. We can use that kernel with v5 userland."
sidebar_position: 1
sidebar_label: "! Unix v4 on SIMH"
---

# How to install ! Unix v4 on SIMH?

![SIMH PDP-11 emulator with ! Unix v4](./unix-v4-SIMH-5.webp)

Sadly, we do not have a complete copy of Unix v4, but we do have a copy of a kernel that is from between v3 and v4. We can use that kernel with v5 userland. It can be used on SIMH PDP-11 emulator.

## Downloads

First, we need to prepare an image of Unix v5 with the `nsys` kernel. We have prepared such an image for you to download:

- [! Unix-v4 image (v5 root with nsys kernel)](https://github.com/InstallerLegacy/nsys-image/releases/latest/download/nsysroot.zip)

If you want to prepare the image yourself, refer to [our guide on how to do so](/blog/how-to-put-the-nsys-kernel-on-a-disk-image-of-unix-v5/).

## Using ! Unix-v5

:::tip

If you have not already installed SIMH PDP-11 emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-pdp11/) on Linux and Windows.

:::

Extract the archive you downloaded. Inside you will find a file called `nsysroot`. Create a folder somewhere to store the files for this VM and move that file into it.

Now we will create a config file for our VM. Create a text file called `pdp11.ini` with the following content in the VM folder:

```ini
set cpu 11/45
att rk0 nsysroot
boot rk0
```

![pdp11.ini](./unix-v4-SIMH-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
pdp11
```

![pdp11](unix-v4-SIMH-2.webp)

After the emulator starts, you will get a `@` prompt. Type `nsys` and press enter to run the `nsys` kernel.

![boot](./unix-v4-SIMH-3.webp)

You will be asked to log in. Type `root` and press enter to log in. There is no password.

![! Unix-v4 login](./unix-v4-SIMH-4.webp)

You can now run `ls` to see the list of files. To change directory, you need to use the `chdir` command, `cd` is not available.

![! Unix-v4 list of files in root](./unix-v4-SIMH-5.webp)

That's it! We used ! Unix-v4. We can create a shell script to make it easy to launch the VM. Create a file called `unix-v4.sh` with the following content:

```bash
#!/bin/bash
pdp11
```

Now make the file executable:

```bash
chmod +x unix-v4.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1970s/1973/unix-v4/#manuals) on the [main ! Unix-v4 page](/1970s/1973/unix-v4) to learn how to use it.

### Windows

:::tip

You should use Linux. If you don’t know how to install a Linux distro, see [our tutorials on how to install Kubuntu](https://setup.virtualhub.eu.org/tag/os/), a beginner-friendly distro.

:::

On Windows, you need to place the `PDP11.exe` file you downloaded in [this tutorial](https://setup.virtualhub.eu.org/simh-pdp11#windows) in the VM folder. Then you can follow the above tutorial as usual. The shell script will not work on Windows. You need to rename it to `unix-v4.bat`. Then you can double-click the file to launch the VM, no need to make it executable.

## Credits

- The Unix v5 image, the `nsys` kernel and other files used above are from [TUHS](https://www.tuhs.org).

## Video tutorial

Do you want to follow the tutorial by watching a video? We will post a video on our [YouTube channel](https://www.youtube.com/@virtua1hub) soon.

Archives of this tutorial are available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1970s/1973/unix-v4/simh/).
