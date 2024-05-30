---
keywords: ["Unix v6", "Unix", "Interdata 7/32", "SIMH", "1970s", "1975"]
image: ./unix-v6-SIMH-id32-5.webp
description: 'We can run ! Unix v6 Interdata 7/32 port on the SIMH ID32 emulator. First, we need to download the ! Unix v6 kit for the Interdata 7/32. You can download the kit needed to run it on the SIMH Interdata 7/32 emulator from the "SIMH Legacy" website.'
sidebar_position: 2
sidebar_label: "! Unix v6 on SIMH Interdata 7/32"
---

# How to install ! Unix v6 on SIMH Interdata 7/32 emulator?

![SIMH ID32 emulator with ! Unix v6](./unix-v6-SIMH-id32-5.webp)

We can run ! Unix v6 Interdata 7/32 port on the SIMH ID32 emulator. First, we need to download the ! Unix v6 kit for the Interdata 7/32.

## Downloads

You can download the kit needed to run it on the SIMH Interdata 7/32 emulator from the [“SIMH Legacy” website](http://simh.trailing-edge.com/):

- [! Unix-v6 Interdata 7/32 kit](http://simh.trailing-edge.com/kits/iu6swre.zip)

## Using ! Unix-v6 Interdata 7/32 port

:::tip

If you have not already installed SIMH Interdata 7/32 emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-id32/) on Linux and Windows.

:::

Extract the archive you downloaded. Inside you will find a file called several files. Create a folder somewhere to store the files for this VM and move the `iu6_dp0.dsk` file into it.

Now we will create a config file for our VM. Create a text file called `id32.ini` with the following content in the VM folder:

```ini
set ttp ena
set pas dev=12
d lfc tps 100
att -e dp0 iu6_dp0.dsk
boot dp0
```

![id32.ini](./unix-v6-SIMH-id32-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
id32
```

![id32](./unix-v6-SIMH-id32-2.webp)

After the emulator starts, you will get a `?` prompt. Type `unix` and press enter to run the `unix` kernel.

![boot](./unix-v6-SIMH-id32-3.webp)

You will be asked to log in. Type `root` and press enter to log in. There is no password.

![! Unix-v6 login](./unix-v6-SIMH-id32-4.webp)

You will be notified that you have unread mail. Run `mail` to read a message from 1978! When asked whether you want to save it, type `n` and press enter.

![Mail from 1978](./unix-v6-SIMH-id32-5.webp)

You can now run `ls` to see the list of files. To change directory, you need to use the `chdir` command, `cd` is not available.

![! Unix-v6 list of files in root](./unix-v6-SIMH-id32-6.webp)

That's it! We used ! Unix-v6 on SIMH Interdata 7/32 emulator. We can create a shell script to make it easy to launch the VM.

### Linux

Create a file called `unix-v6-id32.sh` with the following content:

```bash
#!/bin/bash
id32
```

Now make the file executable:

```bash
chmod +x unix-v6-id32.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1970s/1975/unix-v6/#manuals) on the [main ! Unix-v6 page](/1970s/1975/unix-v6) to learn how to use it. For documents specific to the Interdata 7/32 port, see [this section](/1970s/1975/unix-v6/#interdata-732-specific-documentation).

### Windows

Create a file called `unix-v6-id32.bat` with the following content:

```bash
id32
```

Now you can start the VM by double-clicking the shell script. See the [manuals section](/1970s/1975/unix-v6/#manuals) on the [main ! Unix-v6 page](/1970s/1975/unix-v6) to learn how to use it. For documents specific to the Interdata 7/32 port, see [this section](/1970s/1975/unix-v6/#interdata-732-specific-documentation).

## Credits

- The disk image and other files used above are from a kit available on [SimH “Classic” website](http://simh.trailing-edge.com/).

## Video tutorial

Do you want to follow the tutorial by watching a video? We will post a video on our [YouTube channel](https://www.youtube.com/@virtua1hub) soon.

Archives of this tutorial are available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1970s/1975/unix-v6/simh-id32/).
